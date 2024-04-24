import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const [errors, setErrors] = useState([]);
  const fetchDataProducts = async () => {
    try {
      // Ambil token dari localStorage

      // Kirim permintaan GET dengan header yang disertakan
      const response = await axios.get(
        "http://localhost:5001/api/v1/products",
        {
          headers: {
            Authorization: "",
          },
        }
      );

      // Set data produk ke state
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);

  return (
    <div className="flex  w-screen min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 mt-12 w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Product List</h2>
          <Link
            to="/product/create"
            className="bg-blue-500 px-2 py-2 text-sm rounded shadow-md text-white font-bold"
          >
            + Create New Product
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse text-center">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Price Per Wholesaler</th>
                <th className="px-4 py-2">Price Per Retail</th>
                <th className="px-4 py-2">Stock Per Wholesale</th>
                <th className="px-4 py-2">Stock Per Retail</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Unit</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className=" object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      {product.price_per_wholesaler.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="px-4 py-2">
                      {product.price_per_retail.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="px-4 py-2">{product.stock_per_whosaler}</td>
                    <td className="px-4 py-2">{product.stock_per_retail}</td>
                    <td className="px-4 py-2">{product.category.name}</td>
                    <td className="px-4 py-2">{product.unit.name}</td>
                    <td className="px-4 py-2">{product.description}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center items-center">
                        <Link
                          to={`/product/edit/${product.id}`}
                          className="bg-green-600 px-3 py-1 text-white rounded hover:bg-green-700 mr-2"
                        >
                          EDIT
                        </Link>
                        <button className="bg-red-700 px-3 py-1 text-white rounded hover:bg-red-800">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="10"
                    className="text-center py-4 text-red-500 font-bold"
                  >
                    Product Not Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import Sidebar from "../../components/Sidebar";
import api from "../../api";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchDataProducts = async () => {
    await api.get("/api/products").then((response) => {
      setProducts(response.data.data);
    });
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);
  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 mt-12">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Product List</h2>
            <a
              href="/product/create"
              className="bg-blue-500 px-4 py-2 rounded shadow-md items-center text-white font-bold"
            >
              + Create new Product
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Product Code</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Unit</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <>
                      <tr
                        className="border-t border-gray-300 text-center"
                        key={index}
                      >
                        <td className="px-4 py-2">{product.product_code}</td>
                        <td className="px-4 py-2">{product.name}</td>
                        <td className="px-4 py-2">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="cover  rounded"
                            style={{
                              width: "75px",
                              height: "75px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="px-4 py-2">{product.category}</td>
                        <td className="px-4 py-2">{product.unit}</td>
                        <td className="px-4 py-2">{product.description}</td>
                        <td className="px-4 py-2">
                          {product.price
                            .toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })
                            .replace(/\.00$/, "")}
                        </td>
                        <td className="px-4 py-2">{product.stock}</td>
                      </tr>
                    </>
                  ))
                ) : (
                  <tr className="border-t border-gray-300">
                    <td colSpan="10" className="text-center">
                      <div className="mx-auto text-red-500 font-bold mb-0">
                        Product Not Available
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

import axios from "axios";
import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const ProductEditPage = () => {
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerWholesaler, setPricePerWholesaler] = useState();
  const [pricePerRetail, setPricePerRetail] = useState();
  const [stockPerWhosaler, setStockPerWhosaler] = useState();
  const [stockPerRetail, setStockPerRetail] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  // const handleFileChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const { id } = useParams();

  const fetchDetailProduct = async () => {
    await axios
      .get(`http://172.20.10.2:5001/api/v1/products/detail/${id}`)
      .then((response) => {
        setName(response.data.data.name);
        setDescription(response.data.data.description);
        setPricePerRetail(response.data.data.price_per_retail);
        setPricePerWholesaler(response.data.data.price_per_wholesaler);
        setStockPerRetail(response.data.data.stock_per_retail);
        setStockPerWhosaler(response.data.data.stock_per_whosaler);
        setCategory(response.data.data.category_id);
        setImage(response.data.data.image);
      });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://172.20.10.2:5001/api/v1/products/update/${id}`,
        {
          name,
          description,
          price_per_retail: pricePerRetail,
          price_per_wholesaler: pricePerWholesaler,
          stock_per_retail: stockPerRetail,
          stock_per_wholesaler: stockPerWholesaler,
          category_id: category,
          image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product updated:", response.data);
      navigate("/product"); // Redirect to product list page after successful update
    } catch (error) {
      console.error("Failed to update product:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const fetchCategories = async () => {
    await axios
      .get("http://172.20.10.2:5001/api/v1/categories")
      .then((response) => setCategories(response.data.data));
  };

  const fetchUnits = async () => {
    await axios
      .get("http://172.20.10.2:5001/api/v1/units")
      .then((response) => setUnits(response.data.data));
  };
  useEffect(() => {
    fetchDetailProduct();
    fetchCategories();
    fetchUnits();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={updateProduct}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Product Name"
                    value={name}
                    required
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.name[0]}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pricePerWholesaler"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Price Per Wholesaler
                  </label>
                  <input
                    type="number"
                    id="pricePerWholesaler"
                    value={pricePerWholesaler}
                    name="wholesalerPrice"
                    onChange={(e) => setPricePerWholesaler(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="0"
                    required
                  />
                  {errors.pricePerWholesaler && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.pricePerWholesaler[0]}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pricerPerRetail"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Price Per Retail
                  </label>
                  <input
                    type="number"
                    id="pricePerRetail"
                    value={pricePerRetail}
                    name="retailPrice"
                    onChange={(e) => setPricePerRetail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="0"
                    required
                  />
                  {errors.pricePerRetail && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.pricePerRetail[0]}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stockPerWhosaler"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Stock Per Whosaler
                  </label>
                  <input
                    type="number"
                    id="stockPerWhosaler"
                    name="whosalerStock"
                    value={stockPerWhosaler}
                    onChange={(e) => setStockPerWhosaler(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="0"
                    required
                  />
                  {errors.stockPerWhosaler && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.stockPerWhosaler[0]}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stockPerRetail"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Stock Per Retail
                  </label>
                  <input
                    type="number"
                    id="stockPerRetail"
                    value={stockPerRetail}
                    name="retailStock"
                    onChange={(e) => setStockPerRetail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="0"
                    required
                  />
                  {errors.stockPerRetail && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.stockPerRetail[0]}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                    name="image"
                    value={image}
                    className="w-full px-3 py-2 border rounded-md  border-blue-500"
                    placeholder="product.jpg"
                    required
                  />
                  {errors.image && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.image[0]}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Category
                  </label>
                  <select
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    id="category"
                    value={category}
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                  >
                    <option value="">Choose a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="unit"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Unit
                  </label>
                  <select
                    name="unit"
                    id="unit"
                    onChange={(e) => setUnit(e.target.value)}
                    value={unit}
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                  >
                    <option value="">Choose a unit</option>
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  ></textarea>

                  {errors.description && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.description[0]}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 items-center">
                  <div className="mb-4">
                    <a
                      href="/product"
                      className="w-full  bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-blue-700"
                    >
                      Cancel
                    </a>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditPage;

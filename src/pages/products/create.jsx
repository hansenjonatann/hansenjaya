import axios from "axios";
import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const ProductCreatePage = () => {
  const [name, setName] = useState();
  const [pricePerWholesaler, setPricePerWholesaler] = useState();
  const [pricePerRetail, setPricePerRetail] = useState();
  const [stockPerWhosaler, setStockPerWhosaler] = useState();
  const [stockPerRetail, setStockPerRetail] = useState();
  const [category, setCategory] = useState();
  const [unit, setUnit] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const storeProduct = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5001/api/v1/products/store", {
        name: name,
        price_per_wholesaler: pricePerWholesaler,
        price_per_retail: pricePerRetail,
        stock_per_whosaler: stockPerWhosaler,
        stock_per_retail: stockPerRetail,
        category_id: category,
        unit_id: unit,
        description: description,
        image: image,
      })
      .then(() => {
        navigate("/product");
        update();
      })
      .catch((error) => {
        setErrors(error.response.data);
        console.log(error);
      });
  };

  const fetchCategories = async () => {
    try {
      await axios
        .get("http://localhost:5001/api/v1/categories")
        .then((response) => setCategories(response.data.data))
        .catch((err) => setErrors(err.response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUnits = async () => {
    try {
      await axios
        .get("http://localhost:5001/api/v1/units")
        .then((response) => setUnits(response.data.data))
        .catch((error) => setErrors(error.response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchUnits();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Create new Product</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={storeProduct}>
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
                    name="name"
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
                    onChange={(e) => handleFileChange(e.target.value)}
                    name="image"
                    className="w-full px-3 py-2 border rounded-md  border-blue-500"
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
                      className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    >
                      Create
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

export default ProductCreatePage;

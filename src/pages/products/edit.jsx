import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../../api";

const ProductEditPage = () => {
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const { id } = useParams();

  const fetchDetailProduct = async () => {
    await api.get(`/api/products/${id}`).then((response) => {
      setName(response.data.data.name);
      setDescription(response.data.data.description);
      setPrice(response.data.data.price);
      setStock(response.data.data.stock);
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Create new Product</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="code"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                    disabled
                  />
                </div>

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
                    value={name}
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
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    id="image"
                    name="image"
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

                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    id="price"
                    className="w-full border rounded-md focus:outline-none focus:border-blue-500 px-3 py-2"
                  />
                </div>
                {errors.price && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.price[0]}
                  </p>
                )}

                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    id="stock"
                    className="w-full border rounded-md focus:outline-none focus:border-blue-500 px-3 py-2"
                  />
                </div>

                {errors.stock && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.stock[0]}
                  </p>
                )}

                <div className="flex gap-2 items-center">
                  <div class="mb-4">
                    <a
                      href="/product"
                      class="w-full  bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-blue-700"
                    >
                      Cancel
                    </a>
                  </div>
                  <div class="mb-4">
                    <button
                      type="submit"
                      class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
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

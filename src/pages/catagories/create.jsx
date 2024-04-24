import axios from "axios";
import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const CategoryCreatePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const storeCategory = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5001/api/v1/categories/store", {
        name: name,
        description: description,
      })
      .then(() => navigate("/category"))
      .catch((error) => setErrors(error.response.data));
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Create new Category</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={storeCategory}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Category name"
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
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Category Description
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
                  <div class="mb-4">
                    <a
                      href="/category"
                      class="w-full  bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-blue-700"
                    >
                      Cancel
                    </a>
                  </div>
                  <div class="mb-4">
                    <button
                      type="submit"
                      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
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

export default CategoryCreatePage;

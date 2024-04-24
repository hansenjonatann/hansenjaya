import axios from "axios";
import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const CategoryEditPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchDataCategory = async () => {
    await axios
      .get(`http://localhost:5001/api/v1/categories/detail/${id}`)
      .then((response) => {
        setName(response.data.data.name);
        setDescription(response.data.data.description);
      });
  };

  const updateCurrentCategory = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:5001/api/v1/categories/update/${id}`, {
        name: name,
        description: description,
      })
      .then(() => navigate("/category"))
      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Edit Current Category</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={updateCurrentCategory}>
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
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Category Name"
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
                      href="/category"
                      class="w-full  bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-blue-700"
                    >
                      Cancel
                    </a>
                  </div>
                  <div className="mb-4">
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

export default CategoryEditPage;

import Sidebar from "../../components/Sidebar";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

const UnitCreatePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const storeUnit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5001/api/v1/units/store", {
        name: name,
        description: description,
      })
      .then(() => {
        navigate("/unit");
      })
      .catch((err) => setErrors(err.response.data));
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Create new Unit</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={storeUnit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Unit Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Unit name"
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
                    Unit Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="py-2 w-full border px-4 "
                    onChange={(e) => setDescription(e.target.value)}
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
                      href="/unit"
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

export default UnitCreatePage;

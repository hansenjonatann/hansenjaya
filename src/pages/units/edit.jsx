import Sidebar from "../../components/Sidebar";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../../api";

const UnitEditPage = () => {
  const [name, setName] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchDataUnits = async () => {
    await api.get(`/api/units/${id}`).then((response) => {
      setName(response.data.data.name);
    });
  };

  const updateCurrentUnit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    await api
      .post(`/api/units/update/${id}`, formData)
      .then(() => {
        navigate("/unit");
      })
      .catch((error) => setErrors(error.response.data));
  };

  useEffect(() => {
    fetchDataUnits();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Edit Current Unit</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form onSubmit={updateCurrentUnit}>
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
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Unit Name"
                    required
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 font-bold">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 items-center">
                  <div className="mb-4">
                    <a
                      href="/category"
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

export default UnitEditPage;

import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const UnitPage = () => {
  const [units, setUnits] = useState([]);
  const [errors, setErrors] = useState([]);

  const fetchDataUnits = async () => {
    try {
      const response = await axios
        .get("http://172.20.10.2:5001/api/v1/units")
        .then((response) => setUnits(response.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchDataUnits();
  }, []);
  return (
    <div className="flex w-screen min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 mt-12 w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Unit List</h2>
          <a
            href="/unit/create"
            className="bg-blue-500 px-4 py-2 rounded shadow-md items-center text-white font-bold"
          >
            + Create new Unit
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full  border-collapse text-center">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="px-4 py-2 ">#</th>
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {units.length > 0 ? (
                units.map((item, index) => (
                  <>
                    <tr
                      className="border-b bg-white border-gray-200  hover:bg-gray-100 text-center"
                      key={index}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center items-center">
                          <Link
                            to={`/unit/edit/${item.id}`}
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
                  </>
                ))
              ) : (
                <tr className="border-t border-gray-300">
                  <td colSpan="10" className="text-center">
                    <div className="mx-auto text-red-500 font-bold mb-0">
                      Unit Not Available
                    </div>
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

export default UnitPage;

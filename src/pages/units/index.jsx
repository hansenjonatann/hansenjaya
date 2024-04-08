import Sidebar from "../../components/Sidebar";
import api from "../../api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const UnitPage = () => {
  const [units, setUnits] = useState([]);

  const fetchDataUnits = async () => {
    await api.get("/api/units").then((response) => {
      setUnits(response.data.data);
    });
  };

  useEffect(() => {
    fetchDataUnits();
  });
  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 mt-12">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Unit List</h2>
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
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {units.length > 0 ? (
                  units.map((item, index) => (
                    <>
                      <tr
                        className="border-t border-gray-300 text-center"
                        key={index}
                      >
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="text-center flex gap-2">
                          <Link
                            to={`/unit/edit/${item.id}`}
                            className="bg-green-600 px-2 py-2 text-white font-bold rounded "
                          >
                            EDIT
                          </Link>
                          <button className="bg-red-700 text-white font-bold px-3 rounded-sm shadow border-0">
                            DELETE
                          </button>
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
    </>
  );
};

export default UnitPage;

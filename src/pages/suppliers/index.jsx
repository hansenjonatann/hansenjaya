import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [errors, setErrors] = useState([]);

  const fetchDataSuppliers = async () => {
    try {
      await axios
        .get("http://localhost:5001/api/v1/suppliers")
        .then((response) => setSuppliers(response.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchDataSuppliers();
  }, []);
  return (
    <div className="flex w-screen min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 mt-12 w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Supplier List</h2>
          <a
            href="/supplier/create"
            className="bg-blue-500 px-4 py-2 rounded shadow-md items-center text-white font-bold"
          >
            + Create new Supplier
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full  border-collapse text-center">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="px-4 py-2 ">#</th>
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">Address</th>
                <th className="px-4 py-2 ">Phone </th>
                <th className="px-4 py-2 ">Email</th>
                <th className="px-4 py-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.length > 0 ? (
                suppliers.map((item, index) => (
                  <>
                    <tr
                      className="border-b bg-white border-gray-200  hover:bg-gray-100 text-center"
                      key={index}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.address}</td>
                      <td className="px-4 py-2">
                        <a href={"https://wa.me/" + item.phone_number}>
                          {item.phone_number}
                        </a>
                      </td>

                      <td className="px-4 py-2">{item.email}</td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center items-center">
                          <Link
                            to={`/supplier/edit/${item.id}`}
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
                      Supplier Not Available
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

export default SupplierPage;

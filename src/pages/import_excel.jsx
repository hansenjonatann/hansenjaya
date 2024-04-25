import axios from "axios";
import { useState } from "react";

const ImportExcelPage = () => {
  const [message, setMessage] = useState();
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleImportExcel = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/products/import-excel",
        {
          file: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex bg-gray-100  justify-center items-center min-h-screen">
        <form onSubmit={handleImportExcel}>
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            className="border-2 border-black px-4 py-2 "
          />
          <button
            type="submit"
            className="bg-green-700 py-3 text-white font-bold ml-3 px-2 rounded-md"
          >
            {" "}
            Upload
          </button>
          {message && (
            <p className="text-center text-red-500 font-bold text-md">
              {" "}
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ImportExcelPage;

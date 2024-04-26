import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImportExcelPage = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImportExcel = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios
        .post("http://localhost:5001/api/v1/products/import-excel", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => navigate("/product"));

      console.log(response.data);
      setErrorMessage(""); // Clear error message if previous import attempt had error
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to import the Excel file.");
    }
  };

  return (
    <div className="flex bg-gray-100 justify-center items-center min-h-screen">
      <form onSubmit={handleImportExcel}>
        <input
          type="file"
          accept=".xlsx"
          id="file-input"
          name="file"
          onChange={handleFileChange}
          className="border-2 border-black px-4 py-2"
        />
        <button
          type="submit"
          className="bg-green-700 py-3 text-white font-bold ml-3 px-2 rounded-md"
        >
          Upload
        </button>
        {errorMessage && (
          <p className="text-center text-red-500 font-bold text-md">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ImportExcelPage;

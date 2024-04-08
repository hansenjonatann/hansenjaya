import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    await api
      .post("/api/register", formData)
      .then(() => {
        navigate("/");
        console.log("registered");
      })
      .catch((error) => {
        setErrors(error.response.data);
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container">
          <div className="bg-white p-8 rounded shadow-lg w-96 mx-auto">
            <h2 className="text-2xl text-center font-semibold">Register</h2>
            <form onSubmit={handleRegister} className="mt-2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Full Name"
                  id="name"
                  required
                  name="name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.name[0]}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Email Address"
                  id="email"
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.email[0]}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Create a username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errors.username && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.username[0]}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Password"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    {errors.password[0]}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 py-2 px-4 font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 w-full text-center text-white"
                >
                  Register
                </button>
              </div>
              <div className="mb-4">
                <p className="text-center font-semibold">
                  Have an account?{" "}
                  <Link to="/" className="text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

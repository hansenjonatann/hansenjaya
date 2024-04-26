import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const loginProcess = async (e) => {
    e.preventDefault();
    await axios
      .post("http://172.20.10.2:5001/api/v1/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.data.role.name === "Admin") {
          navigate("/product");
        } else if (response.data.data.role.name === "cashier") {
          navigate("/cashier");
        } else {
          navigate("/");
        }
      })
      .catch((error) => setErrors(error.response.data));
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container">
          <div className="bg-white p-8 rounded shadow-lg w-96 mx-auto">
            <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

            <form onSubmit={loginProcess}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Username"
                />
                {errors.username && (
                  <p className="text-red-500 font-bold">{errors.username[0]}</p>
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
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Password"
                />

                {errors.password && (
                  <p className="text-red-500 font-bold">{errors.password[0]}</p>
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Login
                </button>
              </div>
              <div className="mb-4">
                <p className="text-center font-semibold">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Register
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

export default LoginPage;

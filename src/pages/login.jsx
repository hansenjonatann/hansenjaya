const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container">
          <div className="bg-white p-8 rounded shadow-lg w-96 mx-auto">
            <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

            <form action="">
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
                  name="username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Username"
                />
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
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Password"
                />
              </div>
              <div class="mb-4">
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Login
                </button>
              </div>
              <div className="mb-4">
                <p className="text-center font-semibold">
                  Don't have an account?{" "}
                  <a href="/register" className="text-blue-500">
                    Register
                  </a>
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

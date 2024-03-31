const RegisterPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container">
          <div className="bg-white p-8 rounded shadow-lg w-96 mx-auto">
            <h2 className="text-2xl text-center font-semibold">Register</h2>
            <form action="" className="mt-2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Full Name"
                  id="name"
                  required
                  name="name"
                />
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
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Email Address"
                  id="email"
                  required
                />
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
                  required
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
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Password"
                />
              </div>
              <div className="mb-4">
                <button className="bg-blue-500 py-2 px-4 font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 w-full text-center text-white">
                  Register
                </button>
              </div>
              <div className="mb-4">
                <p className="text-center font-semibold">
                  Have an account?{" "}
                  <a href="/" className="text-blue-500">
                    Login
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

export default RegisterPage;

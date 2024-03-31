import Sidebar from "../../components/Sidebar";

const ProductCreatePage = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Create new Product</h2>

          <div className="overflow-x-auto">
            <div className="bg-white p-8 rounded shadow-lg w-full">
              <form action="">
                <div className="mb-4">
                  <label
                    htmlFor="code"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="username"
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                    disabled
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Product Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="w-full px-3 py-2 border rounded-md  border-blue-500"
                    placeholder="product.jpg"
                    required
                  />
                  <p className="mt-2 text-sm text-red-500 font-bold">
                    Maximum size of image : 2048 KB / 2 MB
                  </p>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                  >
                    <option value="">Choose a category</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="unit"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Unit
                  </label>
                  <select
                    name="unit"
                    id="unit"
                    className="w-full px-3 py-2 border rounded-md border-blue-500"
                  >
                    <option value="">Choose a unit</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="w-full border rounded-md focus:outline-none focus:border-blue-500 px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Product Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    className="w-full border rounded-md focus:outline-none focus:border-blue-500 px-3 py-2"
                  />
                </div>

                <div className="flex gap-2 items-center">
                  <div class="mb-4">
                    <a
                      href="/product"
                      class="w-full  bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-blue-700"
                    >
                      Cancel
                    </a>
                  </div>
                  <div class="mb-4">
                    <button
                      type="submit"
                      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    >
                      Create
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

export default ProductCreatePage;

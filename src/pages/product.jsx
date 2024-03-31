import Sidebar from "../components/Sidebar";

const ProductPage = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Product Code</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Unit</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Product 1</td>
                  <td className="px-4 py-2">$10</td>
                  <td className="px-4 py-2">100</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Product 2</td>
                  <td className="px-4 py-2">$20</td>
                  <td className="px-4 py-2">200</td>
                </tr>
                {/* Tambahkan baris lain sesuai dengan data produk */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

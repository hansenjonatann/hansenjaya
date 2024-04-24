import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarLink = [
    {
      id: 1,
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 2,
      label: "Product",
      url: "/product",
    },
    {
      id: 3,
      label: "Unit",
      url: "/unit",
    },
    {
      id: 4,
      label: "Category",
      url: "/category",
    },
    {
      id: 5,
      label: "Supplier",
      url: "/supplier",
    },
    {
      id: 6,
      label: "Purchase",
      url: "/purchase",
    },
  ];

  const handleLogout = () => {
    // Logika untuk proses logout
    console.log("Logout clicked");
  };

  return (
    <aside
      className={`md:w-64 bg-gray-800 ${isOpen ? "block" : "hidden"} md:block`}
    >
      <div className="flex md:hidden">
        <button
          onClick={toggleSidebar}
          className="toggle-btn p-3 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="#ffffff"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-white text-xl font-semibold">Hansen Jaya</h2>
        {/* Sidebar Content */}
        <ul className="mt-6">
          {sidebarLink.map((item) => (
            <li key={item.id} className="mb-4">
              <a href={item.url} className="text-white hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

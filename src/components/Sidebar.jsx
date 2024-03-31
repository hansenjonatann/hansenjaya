import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
      label: "Role",
      url: "/role",
    },
    {
      id: 6,
      label: "Purchase",
      url: "/purchase",
    },
    {
      id: 7,
      label: "User",
      url: "/user",
    },
  ];

  return (
    <div className={`md:w-64 bg-gray-800 ${isOpen ? "block" : "hidden"}`}>
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

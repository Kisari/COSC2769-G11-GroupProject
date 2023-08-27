import React from "react";

const InnerHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div className="flex items-center">
        <img src="/logo.png" alt="Brand Logo" className="w-10 h-10 mr-4" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <svg
            className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 2a7 7 0 100 14A7 7 0 009 2zm7.707 15.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 111.414-1.414l3 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Item
        </button>
        <svg
          className="h-6 w-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4c-1.657 0-3 1.343-3 3 0 4.879 3.88 8.816 8.71 7.95 2.67-.486 4.29-3.216 3.805-5.88-.61-3.492-3.83-6.345-7.81-6.345zM6.343 4.344a8.962 8.962 0 00-2.83 2.83M3 10.5h0m18 0h0M5.273 18.274a8.965 8.965 0 002.828 2.828M12 19.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z"
          />
        </svg>
      </div>
    </div>
  );
};

export default InnerHeader;

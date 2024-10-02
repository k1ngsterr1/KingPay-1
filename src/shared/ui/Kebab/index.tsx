import { useState } from "react";

export const KebabMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Kebab Menu Button (Three stacked divs) */}
      <button
        className="flex flex-col justify-between h-6 w-4 items-center p-1 cursor-pointer focus:outline-none"
        onClick={toggleMenu}
      >
        {/* Three dots representing the kebab menu */}
        <div className="w-1 h-1 bg-black rounded-full mb-[2px]"></div>
        <div className="w-1 h-1 bg-black rounded-full mb-[2px]"></div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
          <ul>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Edit</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

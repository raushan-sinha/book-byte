import React, { useState } from "react";
import { navLinks } from "./navLinksData";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative lg:hidden flex justify-end">
      {/* Menu and Cross Icon */}
      <button onClick={() => setOpen(!open)}>
        {open ? <RxCross1 size={26} /> : <RiMenu3Fill size={26} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition
                      ${
                        location.pathname === link.path
                          ? "text-red-600 bg-red-50"
                          : ""
                      }`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;

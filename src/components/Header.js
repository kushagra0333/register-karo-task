import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi"; // Importing hamburger icon

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  return (
    <header className="py-3 sticky bg-white top-0 z-40 shadow w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-bold text-3xl text-primary ">
          Register<span className="text-secondary">Karo</span>
        </h2>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <a className="hover:text-violet-900 transition" href="/">
            Home
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Our Services
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Blog
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Contact Us
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            About Us
          </a>
          <a className="text-[24px] hover:text-violet-900 transition" href="/">
            <CiSearch />
          </a>
          <a className="bg-secondary text-white px-4 py-2 transition" href="/">
            Talk An Expert
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden bg-white shadow-md mt-4 px-4 py-2`}>
        <a className="block py-2 hover:text-violet-900 transition" href="/">
          Home
        </a>
        <a className="block py-2 hover:text-violet-900 transition" href="/">
          Our Services
        </a>
        <a className="block py-2 hover:text-violet-900 transition" href="/">
          Blog
        </a>
        <a className="block py-2 hover:text-violet-900 transition" href="/">
          Contact Us
        </a>
        <a className="block py-2 hover:text-violet-900 transition" href="/">
          About Us
        </a>
        <a className="block py-2 text-[24px] hover:text-violet-900 transition" href="/">
          <CiSearch />
        </a>
        <a className="block py-2 bg-secondary text-white px-4 py-2 transition" href="/">
          Talk An Expert
        </a>
      </div>
    </header>
  );
}

export default Header;

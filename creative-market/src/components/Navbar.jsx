import logo from "../assets/logos/logo.svg";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white flex-wrap">
      {/* 1. Logo Section */}
      <Link
        to="/"
        className="flex items-center cursor-pointer hover:opacity-80 transition-all"
      >
        <img src={logo} alt="logo" className="h-7 w-auto " />
      </Link>
      {/* 2. Menu Links Section */}
      <ul className="flex items-center gap-3 text-xl h-auto font-medium ">
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          Home
        </li>
        <span>|</span>
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          About
        </li>
        <span>|</span>
        <li className="hover:text-gray-400 cursor-pointer transition-all ">
          Category
        </li>
      </ul>
      {/* 3. Buttons Section */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-4 py-2 hover:bg-gray-400 cursor-pointer transition-all w-30">
          Login
        </button>
        <button className="bg-black text-white px-4 py-2 hover:bg-gray-400 cursor-pointer transition-all w-30 border">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

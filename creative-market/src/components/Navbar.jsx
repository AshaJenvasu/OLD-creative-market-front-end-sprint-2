import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white">
      {/* 1. Logo Section */}
      <div>
        <img src={logo} alt="logo" className="h-7 w-auto cursor-pointer" />
      </div>
      {/* 2. Menu Links Section */}
      <ul className="md:flex item-center gap-4 text-xl font-medium">
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          Home
        </li>
        <span>|</span>
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          About
        </li>
        <span>|</span>
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          Category
        </li>
      </ul>
      {/* 3. Buttons Section */}
      <div className="flex item-center gap-4">
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

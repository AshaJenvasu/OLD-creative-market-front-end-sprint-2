import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* 1. Logo Section */}
      <div>
        <img src={logo} alt="logo" />
      </div>
      {/* 2. Menu Links Section */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Category</li>
      </ul>
      {/* 3. Buttons Section */}
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;

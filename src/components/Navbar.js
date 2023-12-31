import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>SHOPPING</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <span> </span>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

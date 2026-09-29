import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <h2 className="logo">🎮 GameZone</h2>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/games">Games</NavLink>

        <NavLink to="/cart">
          Cart 🛒 ({cartCount})
        </NavLink>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/about">About</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
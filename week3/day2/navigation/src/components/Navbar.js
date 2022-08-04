import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/projects"
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}

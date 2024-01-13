import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav style={{ backgroundColor: theme.background, color: theme.forground }}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

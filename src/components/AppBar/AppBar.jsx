import { NavLink, Outlet } from "react-router-dom";

function AppBar() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              margin: "10px",
              color: isActive ? "red" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppBar;

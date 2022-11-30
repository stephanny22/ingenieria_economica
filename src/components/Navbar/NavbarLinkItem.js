import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
};

export const NavbarLinkItem = ({ name, href }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={href}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {name}
    </Nav.Link>
  );
};

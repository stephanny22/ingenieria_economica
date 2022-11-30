import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarDropdownItem = ({ name, children }) => {
  return (
    <NavDropdown title={name}>
      {children.map(({ name, href }) => (
        <NavDropdown.Item key={name} as={NavLink} to={href}>
          {name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

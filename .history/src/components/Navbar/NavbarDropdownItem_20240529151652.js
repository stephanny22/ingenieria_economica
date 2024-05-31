import { Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavbarDropdownItem = ({ name, href }) => {
  return (
    <NavDropdown.Item
      key={name}
      as={LinkContainer}
      to={href}
      activeClassName="bg-info text-green"
    >
      <Button>{name}</Button>
    </NavDropdown.Item>
  );
};

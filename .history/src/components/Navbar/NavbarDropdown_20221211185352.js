import { NavDropdown, NavItem } from "react-bootstrap";
import { NavbarDropdownItem } from "./NavbarDropdownItem";
import { useLocation } from "react-router-dom";

export const NavbarDropdown = ({ name, children }) => {
  const { pathname } = useLocation();

  const links = children.map(({ href }) => href);

  return (
    <NavDropdown
      title={
        <span
          className={`${links.includes(pathname) ? "text-info" : "text-white"}`}
        >
          {name}
        </span>
      }
      as={NavItem}
      className={`${
        links.includes(pathname) && "border-bottom border-3 border-info"
      }`}
    >
      {children.map((item) => (
        <NavbarDropdownItem key={item.href} {...item} />
      ))}
    </NavDropdown>
  );
};

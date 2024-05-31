import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavbarLinkItem = ({ name, href }) => {
  return (
    <LinkContainer
      to={href}
      activeClassName="border-bottom border-3 text-info border-info"
      className={"d-flex align-items-center"}
    >
      {<Button>{name}</Button>}
    </LinkContainer>
  );
};

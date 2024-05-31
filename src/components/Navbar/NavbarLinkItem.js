import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavbarLinkItem = ({ name, href }) => {
  return (
    <LinkContainer to={href} >
      <Button>{name}</Button>
    </LinkContainer>
  );
};

 
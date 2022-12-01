import { Container, Nav, Navbar } from "react-bootstrap";
import { NavbarDropdown } from "./NavbarDropdown";
import { NavbarLinkItem } from "./NavbarLinkItem";

let items = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Conversión de tasas",
    href: "/conversion-de-tasas",
  },
  {
    name: "Anualidades",
    children: [
      {
        name: "Anualidad ordinaria",
        href: "/anualidad-ordinaria",
      },
      {
        name: "Anualidad vencida",
        href: "/anualidad-vencida",
      },
      {
        name: "Anualidad anticipada",
        href: "/anualidad-anticipada",
      },
      {
        name: "Anualidad diferida",
        href: "/anualidad-diferida",
      },
    ],
  },
  {
    name: "Amortización",
    href: "/amortizacion",
  },
  {
    name: "Capitalización",
    href: "/capitalizacion",
  },
];

export const NavbarMenu = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ing. economica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {items.map((item, index) =>
              item.href && !item.children ? (
                <NavbarLinkItem key={item.href} {...item} />
              ) : (
                <NavbarDropdown key={item.name} {...item} />
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

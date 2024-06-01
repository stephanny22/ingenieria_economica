import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarDropdown } from "./NavbarDropdown";
import { NavbarLinkItem } from "./NavbarLinkItem";

// Importa la imagen del icono desde la carpeta de assets
import iconoImagen from "../../assets/iconoing2.png"

let items = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Interes Simple",
    href:  "/interes-simple",
  },
  {
    name: "Conversión de tasas",
    href: "/conversion-de-tasas",
  },
  {
    name: "Anualidades",
    href: "/anualidades",
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
        {/* Agrega el icono al lado del título Ing. economica */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={iconoImagen} alt="Icono" width="50" height="50" className="me-2" />
          Ing. economica
        </Navbar.Brand>
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
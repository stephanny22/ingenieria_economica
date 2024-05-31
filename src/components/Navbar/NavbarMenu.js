import React, { useState } from "react";
import { NavbarLinkItem } from "./NavbarLinkItem";
import "../../styles/_CustomNav.scss"; // Importa tus estilos CSS
import iconoImagen from "../../assets/iconoing2.png";

const li = [
  ["Inicio", "/"],
  ["Interes Simple", "/interes-simple"],
  ["Conversión de tasas", "/conversion-de-tasas"],
  ["Anualidades", "/anualidades"],
  ["Amortización", "/amortizacion"],
  ["Capitalización", "/capitalizacion"]
];

const CustomNav = () => {
  const [windowSize, setWindowSize] = useState(false);

  const toggleWindowSize = () => {
    setWindowSize(!windowSize);
  };

  return (
      <nav className="navbar-menu" style={{ width: windowSize ? 250 : 60 }}>
        <div className="burger" onClick={toggleWindowSize}>
          <img src={iconoImagen} alt="Icono" className="small-icon" />
        </div>
        <ul className="navbar__list">
          {li.map((item, i) => (
            <li className="navbar__li" key={i} style={{ display: windowSize ? "block" : "none" }}>
              <NavbarLinkItem name={item[0]} href={item[1]} />
            </li>
          ))}
        </ul>
        
      </nav>
      
  );
};

export default CustomNav;
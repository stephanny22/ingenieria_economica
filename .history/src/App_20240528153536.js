import AppRouter from "./routes/AppRouter";
import { NavbarMenu } from "./components/Navbar";
import React from 'react';
import './index.css'; // Asegúrate de importar el CSS aquí también

const App = () => {
  return (
    <>
      <NavbarMenu />
      <AppRouter />
    </>
  );
};

export default App;

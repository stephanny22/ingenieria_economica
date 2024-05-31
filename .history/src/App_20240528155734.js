import AppRouter from "./routes/AppRouter";
import { NavbarMenu } from "./components/Navbar";
import React from 'react';

const App = () => {
  return (
    <>
      <NavbarMenu />
      <AppRouter />
    </>
  );
};

export default App;

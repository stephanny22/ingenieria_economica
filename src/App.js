import AppRouter from "./routes/AppRouter";
import CustomNav from "./components/Navbar/NavbarMenu";
import React from 'react';

const App = () => {
  return (
    <>
      <CustomNav />
      <AppRouter />
    </>
  );
};

export default App;
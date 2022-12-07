import AppRouter from "./routes/AppRouter";
import { NavbarMenu } from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavbarMenu />
      <AppRouter />
    </>
  );
};

export default App;

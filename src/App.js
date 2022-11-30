import AppRouter from "./routes/AppRouter";
import { NavbarMenu } from './components/Navbar/NavbarMenu';

const App = () => {
  return (
    <>
      <NavbarMenu />
      <AppRouter />
    </>
  );
};

export default App;

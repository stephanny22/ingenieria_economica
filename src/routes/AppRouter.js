import { HomePage } from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { RateConversion } from "../pages/RateConversion";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/conversion-de-tasas" element={<RateConversion />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default AppRouter;

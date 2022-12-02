import { HomePage } from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { RateConversionPage } from "../pages/RateConversionPage";
import { AnnuitiesPage } from "../pages/AnnuitiesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AmortizationPage } from "./../pages/AmortizationPage";
import { CapitalizationPage } from "./../pages/CapitalizationPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/conversion-de-tasas" element={<RateConversionPage />} />
        <Route path="/anualidades" element={<AnnuitiesPage />} />
        <Route path="/amortizacion" element={<AmortizationPage />} />
        <Route path="/capitalizacion" element={<CapitalizationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;

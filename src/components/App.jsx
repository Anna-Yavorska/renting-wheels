import FavoritePage from "pages/FavoritePage/FavoritePage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import HomePage from "pages/HomePage/HomePage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
          <Route path="*" element={<HomePage />} />
          </Route>
      </Routes>
    </div>
  );
};

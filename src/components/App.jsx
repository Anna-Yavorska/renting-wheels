import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/catalog" element={<h1>Catalog</h1>} />
        <Route path="/favorite" element={<h1>Favorite</h1>} />
      </Routes>
    </div>
  );
};

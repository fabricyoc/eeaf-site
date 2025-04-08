import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from './pages/PaginaBase';
import Home from "./pages/Home";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas aninhadas */}
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

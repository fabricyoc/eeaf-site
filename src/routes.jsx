import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from './pages/PaginaBase';
import Home from "./pages/Home";
import Arquivos from "./pages/Arquivos";
import Contatos from "./pages/Contatos";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas aninhadas */}
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="/arquivos" element={<Arquivos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

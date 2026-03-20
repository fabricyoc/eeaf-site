import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from './pages/PaginaBase';
import Home from "./pages/Home";
import Arquivos from "./pages/Arquivos";
import Contatos from "./pages/Contatos";
import Eventos from "./pages/Eventos";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas aninhadas */}
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="/arquivos" element={<Arquivos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:year" element={<Eventos />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

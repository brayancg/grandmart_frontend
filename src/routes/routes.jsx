import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage";
import { UsuariosPage } from "../pages/UsuariosPage";
import ImagenesPage from "../pages/ImagenesPage";
import LoginPage from "../pages/LoginPage";
import DashAdmin from "../pages/DashAdmin";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/usuarios" element={<UsuariosPage />} />
        <Route exact path="/imagenes" element={<ImagenesPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/dashAdmin" element={<DashAdmin />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

/* Pages */
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Regiao from "./pages/Regiao";
import Footer from "./pages/Footer";

/* Libs externas */
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

/* React  */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MunicipiosPorRegiao from "./pages/MunicipiosPorRegiao";

/**
 * Component App - Principal
 */
function App() {
  return (
    <div className="container">
      {/* Todas os componentes que precisam ser exibidos com rotas. Devem sera dentro do BrowserRouter */}
      <BrowserRouter>
        {/* Header estático */}
        <Header />

        <main>
          {/* Unico local que tem conteudo alterado(render content) */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="regiao" element={<Regiao />} />
            <Route
              path="municipiosPorRegiao/:regiao_id/:regiao_nome" /* Passando parametros para rotas */
              element={<MunicipiosPorRegiao />}
            />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </main>

        {/* Footer estático */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Politicas from "./pages/Politicas";
//BrouwserRouter: componente essencial para conduzir o roteamento do navegador

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Politicas from "./pages/Politicas";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import { Toaster } from "react-hot-toast";
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
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/tarefas/adicionar" element={<NovaTarefa/>} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position ="bottom-right"/>
    </>
  );
}

export default App;
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
import EditarTarefa from "./pages/EditarTarefa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Loader from "./components/Loader";
//BrouwserRouter: componente essencial para conduzir o roteamento do navegador

function App() {
  //O estado de usuario indica se ele está logado ou não na aplicação
  //null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //monitora/detecta o usuário conectado
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  if(loading) {
    return <Loader />
  }

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu usuario = {usuarioLogado} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa/>} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster position ="bottom-right"/>
      </UsuarioContext.Provider>
    </>
  );
}

export default App;
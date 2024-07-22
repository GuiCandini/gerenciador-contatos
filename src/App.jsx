import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Politicas from "./pages/Politicas";
import NovoContato from "./pages/NovoContato";
import Contatos from "./pages/Contatos";
import { Toaster } from "react-hot-toast";
import EditarContato from "./pages/EditarContato";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Loader from "./components/Loader";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/contatos/adicionar" element={<NovoContato/>} />
            <Route path="/contatos/editar/:id" element={<EditarContato />} />
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
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarCollapse, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import "./Menu.css";

//Link: este componente habilita o SPA(Single-page application)
//Se houver links externos, utilize a tag <a>

function Menu() {
    const usuario = useContext(UsuarioContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout().then(() => {
            navigate("/login");
        });
    }

    return (
        <header>
            <Navbar className="navbar" expand="md">
                <Container fluid>
                    <Link to="/"><img src="./public/logo 2trab sema 6.png" alt="Logo Contact Manager" width="32"/></Link>
                    <Navbar.Toggle />
                    <NavbarCollapse>
                        <Nav className="ms-auto">
                            {usuario && <span className="text-light nav-link">{usuario.displayName}</span>}
                            {!usuario && <Link className="nav-link" to="/login">Login</Link>}
                            {!usuario && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            {usuario && <Link className="nav-link" to="/contatos">Contatos</Link>}
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            {usuario && <Button variant="outline-light" className="mx-auto" onClick={handleLogout}>
                                Logout
                            </Button>}
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;
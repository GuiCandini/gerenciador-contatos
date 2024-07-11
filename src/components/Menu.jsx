import { Link } from "react-router-dom";
import { Container, Navbar, NavbarCollapse, Nav } from "react-bootstrap";
//Link: este componente habilita o SPA(Single-page application)
//Se houver links externos, utilize a tag <a>

function Menu() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/"><img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32"/></Link>
                    <Navbar.Toggle />
                    <NavbarCollapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            <Link className="nav-link" to="/novatarefa">Nova Tarefa</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;
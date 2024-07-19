import { Link } from "react-router-dom";
import "./Footer.css"

function Rodape() {
    return (
            <footer className="footer text-center">
                <Link className="nav-link" to="/politicas">
                <p> “  Seus contatos, sempre organizados! ” </p>
                </Link>
                <Link to="/"><img src="./public/logo 2trab sema 6.png" width="20"/></Link>
                <p1> “  Conteúdo protegido por direitos autorais © 2024 Contact Manager ” </p1>
            </footer>
    );
}
export default Rodape;
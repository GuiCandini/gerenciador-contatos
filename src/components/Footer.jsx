import { Link } from "react-router-dom";
import "./Footer.css"

function Rodape() {
    return (
        <main>
            <footer className="footer text-center">
                <Link className="nav-link" to="/politicas">Politicas de Privacidade</Link>
            </footer>
            
        </main>
    );
}

export default Rodape;
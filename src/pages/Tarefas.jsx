import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tarefas() {
    return (
        <main>
            <Container className="mt-3">
                <h1>Suas tarefas</h1>
                <hr />
                <Link to="/tarefas/adicionar" className="btn btn-outline-dark">Adicionar Tarefa</Link>
            </Container>
        </main>
    );
}

export default Tarefas;
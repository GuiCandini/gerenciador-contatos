import { Badge, Card, Container, Button} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { deleteTarefa, getTarefas, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Tarefas() {

    const [tarefas, setTarefas] = useState(null);
    //Recuperamos a informação do usuário(se está logado ou não)
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function carregarDados() {
        // O then devolve a lista de tarefas da coleção
        if(usuario) {
            getTarefasUsuario(usuario.uid).then((resultados) => {
                setTarefas(resultados);
            });
        }
    }

    function deletarTarefa(id) {
        const deletar = confirm("Tem certeza?");
        if(deletar) {
            deleteTarefa(id).then(()=> {
                toast.success("Tarefa ramovida!")
                carregarDados();
            });
        }
    }

    //Executar uma função quando o componente é renderizado a primeira vez
    useEffect(() => {
        carregarDados();
    }, []);

    if(usuario === null) {
        //Navegar para outra página
        return <Navigate to="/login"/>
    }
    
    return (
        <main>
            <Container className="mt-3">
                <h1>Suas tarefas</h1>
                <hr />
                <Link to="/tarefas/adicionar" className="btn btn-outline-dark">
                    Adicionar Tarefa
                </Link>
                {tarefas ? <section className="mt-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id} className="mb-2">
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <div className="mb-2">
                                    {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                                    <Badge className="ms-1">{tarefa.categoria}</Badge>
                                    <Badge bg="secondary ms-1">{new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge>
                                </div>
                                <Button variant="dark" onClick={()=>{
                                    navigate(`/tarefas/editar/${tarefa.id}`)
                                }}>Editar</Button>
                                <Button variant="outline-danger" onClick={() => deletarTarefa(tarefa.id)} className="ms-2">Excluir</Button>
                            </Card.Body>
                        </Card>
                    })}
                    </section> : <Loader />}
            </Container>
        </main>
    );
}

export default Tarefas;
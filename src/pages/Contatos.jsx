import { Badge, Card, Container, Button} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { deleteContato, getContatos, getContatosUsuario } from "../firebase/contatos";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";
import '../components/Contatos.css'

function Contatos() {

    const [contatos, setContatos] = useState(null);
    //Recuperamos a informação do usuário(se está logado ou não)
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function carregarDados() {
        // O then devolve a lista de tarefas da coleção
        if(usuario) {
            getContatosUsuario(usuario.uid).then((resultados) => {
                setContatos(resultados);
            });
        }
    }

    function deletarContato(id) {
        const deletar = confirm("Tem certeza?");
        if(deletar) {
            deleteContato(id).then(()=> {
                toast.success("Contato deletado.")
                carregarDados();
            });
        }
    }

    useEffect(() => {
        carregarDados();
    }, []);

    if(usuario === null) {
        return <Navigate to="/login"/>
    }
    
    return (
        <main>
            <Container className="mt-3">
                <h1>Seus Contatos</h1>
                <hr />
                <Link to="/contatos/adicionar" className="btn btn-outline-primary">
                    Adicionar Contato
                </Link>
                {contatos ? <section className="mt-2" id="sectionteste"> 
                    {contatos.map((contato) => {
                        return <Card key={contato.id} id="testedois" className="shadow p-3 mb-5 bg-white rounded border-none">
                            <Container className="cardsContato">
                                <Card.Body>
                                <Card.Title className="text-center mb-2">{contato.nome}</Card.Title>
                                <small className="fw-bold">Número:</small><Card.Text className="testeteste"> {contato.numero}</Card.Text>
                                <small className="fw-bold">Tipo:</small><Card.Text> {contato.tipo}</Card.Text>
                                <div className="mb-2"/>
                                <Button variant="outline-dark" onClick={()=>{
                                    navigate(`/contatos/editar/${contato.id}`)
                                }}>Editar</Button>
                                <Button variant="outline-danger" onClick={() => deletarContato(contato.id)} className="ms-2">Excluir</Button>
                            </Card.Body>
                            </Container>
                            
                        </Card>
                    })}
                    </section> : <Loader />}
            </Container>
        </main>
    );
}

export default Contatos;
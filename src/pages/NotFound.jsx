import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../components/NotFound.css";

function NotFound() {
    return (
        <main className="notfound">
          <img src="logo C_Nome.png" alt="Logo Contact Manager" />
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog>
            <Modal.Header className="d-flex justify-content-center align-itens-center">
                <Modal.Title>Erro 404.</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <p>Página indisponível ou endereço incorreto.</p>
            </Modal.Body>
    
            <Modal.Footer>
                <Button className='outline-success btn-sm'><a href="/">Voltar para home</a></Button>
            </Modal.Footer>
            </Modal.Dialog>
            </div>
        </main>
    )
  }

  export default NotFound
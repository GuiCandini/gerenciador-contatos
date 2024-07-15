import { Accordion, Container, Button, Alert } from "react-bootstrap"

function Ajuda() {
    return (
        <main className="mt-2">
            <Container fluid>
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Sobre o nosso sistema
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione nesciunt et fuga nisi eligendi itaque voluptatum, impedit enim doloremque.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Sobre a empresa
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quisquam mollitia repellendus laborum aut error illo, maiores saepe laudantium reprehenderit possimus cumque, eius pariatur molestias?
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className="p-1 m-2">Entre em contato</Button>
                <Button variant="outline-dark"> Botãozinho</Button>
                <Alert variant="danger" className="mt-2">Atenção, estamos em manutenção</Alert>
            </Container>
        </main>
    );
}

export default Ajuda;
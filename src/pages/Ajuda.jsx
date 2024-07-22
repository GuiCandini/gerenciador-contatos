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
                            Dúvidas Frequentes
                        </Accordion.Header>
                        <Accordion.Body>
                            A Central de Ajuda do Contact Manager oferece tutoriais, artigos de suporte, FAQs e vídeos para te ajudar a usar o aplicativo ao máximo. Você também pode entrar em contato com a equipe de suporte através do email ou chat online.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Entre em contato
                        </Accordion.Header>
                        <Accordion.Body>
                            Ainda precisa de ajuda?
                        Se você não encontrar a resposta para sua dúvida na Central de Ajuda, entre em contato com nossa equipe de suporte amigável. Estamos sempre à disposição para te auxiliar:<br/>
                        <hr/>
                        Email: comercial@contacManager.com.br<br/>
                        Telefone: +55 (11) 9999-9999<br/>
                        Chat Online: Acesse o <a target="_blank" href="*">chat online</a> no site do Contact Manager durante o horário comercial.<br/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </main>
    );
}

export default Ajuda;
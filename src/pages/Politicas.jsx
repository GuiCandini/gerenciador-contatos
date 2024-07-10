import { Accordion, Container, Button, Alert } from "react-bootstrap"

function Politicas() {
    return (
        <main>
            <h1>Politicas de Privacidade</h1><Container fluid>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Coleta de Dados Pessoais
                        </Accordion.Header>
                        <Accordion.Body>
                            Em nossa política de privacidade, detalhamos os tipos de informações pessoais que coletamos, como nome, endereço de e-mail e dados de navegação. Explicamos os métodos de coleta, que podem incluir formulários de inscrição, cookies e outras tecnologias de rastreamento, garantindo que o consentimento do usuário seja obtido sempre que necessário.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Uso e Compartilhamento de Dados
                        </Accordion.Header>
                        <Accordion.Body>
                            Os dados pessoais coletados são utilizados para fornecer e melhorar nossos serviços, personalizar a experiência do usuário e enviar comunicações relevantes. Informamos claramente se e com quem esses dados podem ser compartilhados, como parceiros de negócios e prestadores de serviços, sempre respeitando as bases legais e o consentimento dos usuários.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Segurança dos Dados
                        </Accordion.Header>
                        <Accordion.Body>
                            Comprometemo-nos a proteger as informações pessoais dos usuários através de medidas de segurança rigorosas, como criptografia e firewalls. Além disso, garantimos que os dados sejam acessíveis apenas a pessoal autorizado e oferecemos aos usuários direitos e opções para gerenciar suas informações, assegurando transparência e confiança no nosso tratamento de dados.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className="p-2 mt-2">Entre em contato</Button>
            </Container>
        </main>
    );
}

export default Politicas;
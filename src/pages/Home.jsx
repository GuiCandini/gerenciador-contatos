import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "../components/Home.css";

function Home() {
    return (
        <main>
            <div class="Img1"><img src="./public/logo C_Nome.png" width="300"/>
            </div>
            <p className="TextoEntrada">“ Organize seus contatos e simplifique sua vida! “</p>
            <section className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://102busca.com.br/wp-content/uploads/2022/10/102-lista-amarela.jpg" alt="Imagem de lista de contatos" />
                    <Card.Body>
                        <Card.Title>Gerenciador de contatos</Card.Title>
                        <Card.Text>
                            Com o Contact Manager, gerenciar seus contatos nunca foi tão fácil. Nossa plataforma permite que você adicione, edite e organize informações de contato com eficiência. Utilize ferramentas avançadas para categorizar e buscar contatos rapidamente, mantendo todas as informações essenciais ao seu alcance. Garanta a precisão dos seus dados e melhore sua comunicação com um gerenciamento intuitivo e eficaz.
                        </Card.Text>
                        <Button variant="outline-primary">Saiba mais</Button>
                    </Card.Body> 
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://eboxapps.blob.core.windows.net/blog/0353124714.jpg?sv=2018-03-28&sr=b&si=ReadOnlyPolicy&sig=BV1DiaTcvPS1pxGcZ6qva5RTTJYbMZPcGpiqg76OXvs%3D&st=2020-04-28T23:52:06Z&se=9999-01-01T02:59:59Z" alt=""/>
                    <Card.Body>
                        <Card.Title>Armazenamento de contatos</Card.Title>
                        <Card.Text>
                            No Contact Manager, seus contatos são armazenados de forma segura e organizada. Acesse e gerencie informações de maneira prática, garantindo a confidencialidade e integridade dos seus dados. Nossa plataforma facilita a busca e a atualização dos seus contatos, oferecendo uma experiência eficiente e confiável.
                        </Card.Text>
                        <Button variant="outline-primary">Saiba mais</Button>
                    </Card.Body> 
                </Card>
            </section>
        </main>          
    );
}

export default Home;
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "../components/Home.css";

function Home() {
    const [key, setKey] = useState('home');
    return (
        <main>
            {/* <div class="Logo1"><img src="./public/logo C_Nome.png" width="300"/></div> */}
            <div class="Img1"><img src="./public/logo C_Nome.png" width="300"/>
            </div>
            <p className="TextoEntrada">“ Organize seus contatos e simplifique sua vida! “</p>
            <section className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://espnpressroom.com/brazil/files/2024/03/EUROCOPA-2024-1024x576.jpg" />
                    <Card.Body>
                        <Card.Title>Gerenciador de contatos</Card.Title>
                        <Card.Text>
                            O Campeonato Europeu de Futebol da UEFA ou Campeonato da Europa de Futebol da UEFA, também conhecido como Eurocopa ou ainda Euro, é o principal campeonato de futebol entre as seleções masculinas dos países europeus pertencentes à UEFA.
                        </Card.Text>
                        <Button variant="outline-danger">Saiba mais</Button>
                    </Card.Body> 
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://t2.tudocdn.net/716588?w=824&h=494" />
                    <Card.Body>
                        <Card.Title>Exportação de contatos</Card.Title>
                        <Card.Text>
                            A Copa América, oficialmente CONMEBOL Copa América, conhecida até 1975 como Campeonato Sul-Americano de Futebol, é a principal competição entre as seleções de futebol das nações da CONMEBOL.
                        </Card.Text>
                        <Button variant="outline-primary">Saiba mais</Button>
                    </Card.Body> 
                </Card>
            </section>
        </main>          
    );
}

export default Home;
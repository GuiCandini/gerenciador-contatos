import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

function Home() {
    const [key, setKey] = useState('home');
    return (
        <main>
            <h1>Home</h1>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="0" title="Eurocopa">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://espnpressroom.com/brazil/files/2024/03/EUROCOPA-2024-1024x576.jpg" />
                            <Card.Body>
                                <Card.Title>Eurocopa</Card.Title>
                                <Card.Text>
                                    O Campeonato Europeu de Futebol da UEFA ou Campeonato da Europa de Futebol da UEFA, também conhecido como Eurocopa ou ainda Euro, é o principal campeonato de futebol entre as seleções masculinas dos países europeus pertencentes à UEFA.
                                </Card.Text>
                                <Button variant="outline-danger">Saiba mais</Button>
                            </Card.Body> 
                        </Card>
                    </Tab>
                    <Tab eventKey="1" title="Copa América">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://t2.tudocdn.net/716588?w=824&h=494" />
                        <Card.Body>
                            <Card.Title>Copa América</Card.Title>
                            <Card.Text>
                                A Copa América, oficialmente CONMEBOL Copa América, conhecida até 1975 como Campeonato Sul-Americano de Futebol, é a principal competição entre as seleções de futebol das nações da CONMEBOL.
                            </Card.Text>
                            <Button variant="outline-primary">Saiba mais</Button>
                        </Card.Body> 
                    </Card>
                    </Tab>
                    </Tabs>
        </main>
    );
}

export default Home;
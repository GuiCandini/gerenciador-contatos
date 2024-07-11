import { Button } from "react-bootstrap";

function NovaTarefa() {
    return (
        <main>
            <form className="form-section">
                <h1>Nova Tarefa</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" id="titulo" className="form-control" />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="form-control"></textarea>
                </div>
                <div>
                    <label htmlFor="dataConclusao">Data</label>
                    <input
                        type="date"
                        id="dataConclusao"
                        className="form-control"
                    />
                </div>
                <div className="form-check mt-4">
                    <input type="checkbox" id="concluido" className="form-check-input"/>
                    <label htmlFor="concluido" className="form-check-label">Concluido?</label>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria" className="form-select">
                        <option>Selecione uma opção</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Projetos">Projetos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <Button variant="dark" className="mt-2 w-100" type="submit">
                    Salvar Tarefa
                </Button>
            </form>
        </main>
    );
}

export default NovaTarefa;
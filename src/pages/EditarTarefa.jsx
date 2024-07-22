import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getContatos, updateContato } from "../firebase/contatos";
import { useEffect, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarTarefa() {
    //Extrair o id na rota dinâmica
    const { id } = useParams();
    const usuario = useContext(UsuarioContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();

  function carregarDado() {
    getContatos(id).then((tarefa)=>{
        if(tarefa) {
            reset(tarefa);
        } else {
            //se a tarefa buscada não existir, volta para a listagem de tarefas
            navigate("/tarefas");
        }
    });
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() =>{
        toast.success("Tarefa atualizada!");
        navigate("/tarefas");
    });
  }

  useEffect(() => {
    carregarDado();
  }, []);

  if(usuario === null) {
    //Navegar para outra página
    return <Navigate to="/login"/>
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <h1>Editar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data</label>
          <input
            type="date"
            id="dataConclusao"
            className="form-control"
            {...register("dataConclusao")}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria")}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Atualizar Tarefa
        </Button>
      </form>
    </main>
  );
}

export default EditarTarefa;
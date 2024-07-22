import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getContatos, updateContato } from "../firebase/contatos";
import { useEffect, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarContato() {
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
    getContatos(id).then((contato)=>{
        if(contato) {
            reset(contato);
        } else {
            //se a Contato buscada não existir, volta para a listagem de Contatos
            navigate("/Contatos");
        }
    });
  }

  function atualizarContato(data) {
    updateContato(id, data).then(() =>{
        toast.success("Contato atualizado!");
        navigate("/Contatos");
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
      <form className="form-section" onSubmit={handleSubmit(atualizarContato)}>
        <h1>Editar Contato</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 50 })}
          />
          {errors.titulo && (
            <small className="invalid">O nome é obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="tel"
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></input>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <select
            id="tipo"
            className="form-select"
            {...register("tipo")}
          >
            <option disabled selected value="">Selecione uma opção</option>
            <option value="Estudos">Fixo</option>
            <option value="Projetos">Celular</option>
          </select>
        </div>
        <Button variant="outline-primary" className="w-100 mt-1" type="submit">
          Atualizar Contato
        </Button>
      </form>
    </main>
  );
}

export default EditarContato;
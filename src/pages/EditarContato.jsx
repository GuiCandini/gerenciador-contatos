import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getContato, updateContato, contatosCol } from "../firebase/contatos";
import { useEffect, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarContato() {
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
    getContato(id).then((contato)=>{
        if(contato) {
            reset(contato);
        } else {
            navigate("/contatos");
        }
    });
  }

  function atualizarContato(data) {
    updateContato(id, data).then(() =>{
        toast.success("Contato atualizado!");
        navigate("/contatos");
    });
  }

  useEffect(() => {
    carregarDado();
  }, []);

  if(usuario === null) {
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
          <label htmlFor="numero">Número</label>
          <input
            type="tel"
            id="numero"
            className="form-control"
            {...register("numero", { required: true })}
          ></input>
          {errors.numero && (
            <small className="invalid">Número inválido</small>
          )}
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <select
            id="tipo"
            className="form-select"
            {...register("tipo")}
          >
            <option value="Fixo">Fixo</option>
            <option value="Celular">Celular</option>
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
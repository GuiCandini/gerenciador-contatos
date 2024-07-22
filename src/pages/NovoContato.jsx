import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addContato } from "../firebase/contatos";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function NovaTarefa() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function salvarContato(data) {
    //Novo campo no documento que associa o usuário e a tarefa que ele criou
    data.idUsuario = usuario.uid;
    
    //Os dados do formulário são passados para a função de inserir
    //then => aguarda a inserção da tarefa para então exibir o toast
    addContato(data).then(() => {
      toast.success("Contato Adicionado");
      //Redirecionar o usuário para /tarefas
      navigate("/contatos");
    }).catch(() => {
      toast.error("Erro inesperado ao adicioniar contato")
    })
  }

  if(usuario === null) {
    //Navegar para outra página
    return <Navigate to="/login"/>
}

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarContato)}>
        <h1>Adicionar Contato</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className="form-control"
            {...register("nome", { required: true, maxLength: 200 })}
            />
            {errors.titulo && <small className="invalid">o Nome é obrigatório</small>}
        </div>
        <div>
          <label htmlFor="numero">Número de telefone</label>
          <input
            type="tel"
            id="numero" 
            className="form-control"
            {...register("numero", { required: true })}
            />
            {errors.numero && <small className="invalid">A descrição é inválida!</small>}
        </div>
        <div>
          <label htmlFor="categoria">Tipo</label>
          <select 
            id="tipo" 
            className="form-select"
            {...register("tipo")}
            >
            <option value="" disabled selected>Selecione uma opção</option>
            <option value="Fixo">Fixo</option>
            <option value="Celular">Celular</option>
          </select>
        </div>
        <Button variant="outline-primary" className="w-100 mt-3" type="submit">
          Salvar
        </Button>
      </form>
    </main>
  );
}

export default NovaTarefa;

import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { entrarGoogle, loginUsuario } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function entrar(data) {
        //data é um objeto com os dados do formulário
        console.log(data);
    }

    function entrar(data) {
        loginUsuario(data.email, data.senha).then(() => {
            toast.success("Bem vindo(a)!");
            navigate("/contatos");
        }).catch(() => {
            toast.error("Email e/ou Senha incorreta!");
        });
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem vindo(a)!")
            navigate("/contatos");
        });
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(entrar)}>
                <h1>Login</h1>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        {...register("email", {required: "O email é obrigatório!"})}
                    />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        className="form-control"
                        {...register("senha", {required: "A senha é obrigatória!", minLength:{value: 6, message: "Mínimo de 6 caracteres"}})}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
                <Button onClick={loginUsuario} variant="outline-primary" className="mt-3 w-100" type="submit">
                    Entrar
                </Button>
                <Button onClick={handleEntrarGoogle} variant="outline-danger" className="mt-1 w-100" type="button">
                    Entrar com Google
                </Button>
                <div class="mLink text-center">
                    "Não possui conta?"
                    <a href="/cadastro"> Criar conta </a>
                </div>
            </form>
        </main>
    );
}

export default Login;
import "./Login.css"
import { useNavigate } from "react-router-dom"

export function Login() {

    const navigate = useNavigate()

    return (
        <div id="login-page">
            <div id="login-container">

                <div id="login-header">
                    <h1>Bem-vindo!</h1>
                    <p>Por favor, faça login para continuar.</p>
                </div>

                <div id="login-form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <p>Esqueceu a senha?</p>
                </div>

                <div id="login-actions">
                    <button onClick={() => navigate("/historico")}>Entrar</button>
                </div>

                <div id="login-separator">
                    <div className="login-divisor" />
                    <p>ou</p>
                    <div className="login-divisor" />
                </div>


                <div>
                    <p>Não tem uma conta? <span onClick={() => navigate("/sign")}>Registre-se</span></p>
                </div>
            </div>


        </div>
    )
}
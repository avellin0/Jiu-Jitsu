import "./Sign.css"
import { useNavigate } from "react-router-dom"

export function SignIn() {

    const navigate = useNavigate()

    return (
        <div id="sign-page">
            <div id="sign-container">

                <div id="sign-header">
                    <h1>Bem vindo</h1>
                    <p>Cadastra-se agora e fique por dentro de tudo!</p>
                </div>

                <div id="sign-form">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </div>

                <div id="sign-actions">
                    <button onClick={() => navigate("/historico")}>Cadastrar</button>
                </div>

                <div id="sign-separator">
                    <div className="sign-divisor" />
                    <p>ou</p>
                    <div className="sign-divisor" />
                </div>


                <div>
                    <p>Já tem uma conta? <span onClick={() => navigate("/login")}>Faça login</span></p>
                </div>
            </div>


        </div>
    )
}
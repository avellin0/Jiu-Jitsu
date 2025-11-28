import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export function Login() {

    const navigate = useNavigate()
    const [email, setEmaiil] = useState("")
    const [senha, setSenha] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        console.log(email)
    }, [email])


    const handleLogin = () => {

        if (senha === "12345" && email === "user@example.com") {
            navigate("/historico")
        }

        setErrorMessage("Email ou senha incorretos.")
        console.log("Tentando logar com", email, senha);
    }

    return (
        <div id="login-page">
            <div id="login-container">

                <div id="login-header">
                    {errorMessage && <p id="login-header-warning" style={{color: 'red', fontSize: '14px'}}>{errorMessage}</p>}

                    <h1>Bem-vindo!</h1>
                    <p>Por favor, faça login para continuar.</p>
                </div>

                <div id="login-form">
                    <input type="email" placeholder="Email" onChange={(e) => setEmaiil(e.target.value)}    />
                    <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                    <p>Esqueceu a senha?</p>
                </div>

                <div id="login-actions">
                    <button onClick={() => handleLogin()}>Entrar</button>
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
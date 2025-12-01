import "./Sign.css"
import { useNavigate } from "react-router-dom"
import {useState} from "react"

export function SignIn() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSignIn = () => {
        if(name.length <= 0 || email.length <= 0 || password.length <= 0 ){
            alert("Campos obrigatorios ")
            throw new Error("Campos são obrigatorios")
        }

        navigate('/historico')
    }

    return (
        <div id="sign-page">
            <div id="sign-container">

                <div id="sign-header">
                    <h1>Bem vindo</h1>
                    <p>Cadastra-se agora e fique por dentro de tudo!</p>
                </div>

                <div id="sign-form">
                    <input type="text" placeholder="Nome" required={true} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div id="sign-actions">
                    <button onClick={() => handleSignIn()}>Cadastrar</button>
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
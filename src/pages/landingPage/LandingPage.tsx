import "./LandingPage.css"
import { useNavigate } from "react-router-dom";
export function LandingPage() {

    const navigate = useNavigate()

    return (
        <div id="mb-landing-page">

            <div id="mb-lp-header">

                <div id="mb-lp-logo">
                    <img src="./black-belt.png" alt="" id="mb-ld-logo-icon" />
                    <p>Academia ypê <br />jiu-jitsu</p>
                </div>

                <div id="mb-lp-access-system" onClick={() => navigate("/historico")}>
                    <p>Acessar Sistema</p>
                </div>
            </div>

            <div id="mb-lp-main-body">
                <div id="mb-lp-main-title">
                    <p>Controle de presenças simplificado</p>
                </div>

                <div id="mb-lp-subtitle">
                    <p>Gerencie alunos, registre presenças e visualize históricos de aulas de forma rápida e fácil.</p>
                </div>

                <div id="mb-lp-btn">
                    <button onClick={() => navigate("/historico")}>Entrar Agora</button>
                </div>
            </div>
        </div>
    );
}
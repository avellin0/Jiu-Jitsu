import "./NovoAluno.css"
import { useNavigate } from "react-router-dom"
export function NovoAluno() {

    const navigate = useNavigate()

    return (
        <div id="mb-add-body">
            <div id="mb-add-scope">

                <div id="mb-add-header">
                    <div id="mb-lp-logo">
                        <img src="./black-belt.png" alt="" id="mb-logo-icon" />
                        <p>Ypê Jiu-Jitsu</p>
                    </div>

                    <div id="mb-ap-back-btn" onClick={() => navigate("/historico")}>
                        <p>Voltar</p>
                    </div>
                </div>

                <div id="mb-add-main-scope">
                    <h1>Bem-vindo!</h1>

                    <div id="mb-add-main-info-scope">

                        <div className="mb-add-main-info">
                            <p>Nome/Apelido</p>
                            <input type="text" className="mb-add-main-input" />
                        </div>

                        <div className="mb-add-main-info">
                            <p>Faixa</p>
                            <input list="faixas" id="fruta" name="fruta" className="mb-add-main-input" />
                            <datalist id="faixas">
                                <option value="Branca" />
                                <option value="Cinza" />
                                <option value="Amarela" />
                                <option value="Laranja" />
                                <option value="Verde" />
                                <option value="Azul" />
                                <option value="Roxa" />
                                <option value="Marrom" />
                                <option value="Preta" />
                            </datalist>
                        </div>
                    </div>
                     <div id="mb-add-save-btn-scope">
                            <button id="mb-add-save-btn">Salvar</button>

                        </div>
                </div>
            </div>
        </div>
    )
}
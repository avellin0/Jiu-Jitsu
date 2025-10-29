import "./CreateClass.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function CreateClass() {

    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const navigate = useNavigate()

    return (
        <div id="mb-create-class-page">

            <div id="mb-cc-header">
                <div id="mb-lp-logo">
                    <img src="./black-belt.png" alt="" id="mb-logo-icon"/>
                    <p>Ypê Jiu-Jitsu</p>
                </div>
                
                <div id="mb-cc-history-btn" onClick={() => navigate("/historico")}>
                    <p>Histórico</p>
                </div>
            </div>

            <div id="mb-cc-main-body">
                <div id="mb-cc-main-title">
                    <p>Criar Novo Dia</p>
                </div>

                <div id="mb-cc-form-container">
                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "Tarde Adulto" ? null : "Tarde Adulto")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./people.png" alt="" className="mb-cc-img" />
                            <p>Tarde Adulto</p>
                        </div>

                        {selectedClass === "Tarde Adulto" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{width: "70%", height: "70%"}}/>
                            </div>
                        )}
                    </div>

                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "Tarde Kids" ? null : "Tarde Kids")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./sunny.png" alt="" className="mb-cc-img" />
                            <p>Tarde Kids</p>
                        </div>

                         {selectedClass === "Tarde Kids" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{width: "70%", height: "70%"}}/>
                            </div>
                        )}

                    </div>

                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "Noite Adulto" ? null : "Noite Adulto")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./moon.png" alt="" className="mb-cc-img" />
                            <p>Noite Adulto</p>
                        </div>

                         {selectedClass === "Noite Adulto" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{width: "70%", height: "70%"}}/>
                            </div>
                        )}

                    </div>
                </div>

                <div id="mb-cc-next-btn-container">
                    <button id="mb-cc-next-btn" onClick={() => navigate("/nova_turma_alunos")}>Proximo</button>
                </div>

                
            </div>
        </div>
    );
}
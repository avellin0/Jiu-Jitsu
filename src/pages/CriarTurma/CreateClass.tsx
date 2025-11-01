import "./CreateClass.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function CreateClass() {

    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const navigate = useNavigate()


    const handleClass = () => {
        if (selectedClass === null) {
            alert("Selecione um horário")
            return
        }
        navigate(`/nova_turma_alunos/${selectedClass}`)


    }


    return (
        <div id="mb-create-class-page">

            <div id="mb-ap-header">
                <div id="mb-lp-logo">
                    <img src="./black-belt.png" alt="" id="mb-logo-icon" />
                    <p>Ypê Jiu-Jitsu</p>
                </div>

                <div id="mb-cc-history-btn" onClick={() => navigate("/")}>
                    <button className="mb-header-btn" id="mb-cc-header-btn-text">Histórico</button>
                </div>
            </div>

            {/*  */}

            <div id="mb-cc-main-body">
                <div id="mb-cc-main-title">
                    <p>Criar Novo Dia</p>
                </div>

                <div id="mb-cc-form-container">
                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "tarde_adulto" ? null : "tarde_adulto")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./people.png" alt="" className="mb-cc-img" />
                            <p>Tarde Adulto</p>
                        </div>

                        {selectedClass === "tarde_adulto" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{ width: "70%", height: "70%" }} />
                            </div>
                        )}
                    </div>

                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "tarde_Kids" ? null : "tarde_kids")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./sunny.png" alt="" className="mb-cc-img" />
                            <p>Tarde Kids</p>
                        </div>

                        {selectedClass === "tarde_kids" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{ width: "70%", height: "70%" }} />
                            </div>
                        )}

                    </div>

                    <div className="mb-cc-form-input" onClick={() => setSelectedClass(selectedClass === "noite_adulto" ? null : "noite_adulto")}>
                        <div className="mb-cc-form-input-header">
                            <img src="./moon.png" alt="" className="mb-cc-img" />
                            <p>Noite Adulto</p>
                        </div>

                        {selectedClass === "noite_adulto" && (
                            <div className="mb-cc-check">
                                <img src="./check.png" alt="" style={{ width: "70%", height: "70%" }} />
                            </div>
                        )}

                    </div>
                </div>

                <div id="mb-cc-next-btn-container">
                    <button id="mb-cc-next-btn" onClick={() => handleClass()}>Proximo</button>
                </div>


            </div>
        </div>
    );
}
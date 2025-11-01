import "./Frequencia.css"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";

export function Frequencia() {

    const [turmas, setTurmas] = useState<any[]>([])

    useEffect(() => {
        supabase
            .from("aulas")
            .select(`
                id,
                data,
                turma_id,
                turmas (nome),
                presencas (count)
            `)
            .then(({ data }) => setTurmas(data || []))

        console.log("esse é os dados do", turmas);

    }, [])

    useEffect(() => {
        console.log("alunos atualizados:", turmas);
    }, [turmas]);


    const navigate = useNavigate()

    return (
        <>
            <div id="mb-alunos-page">

                <div id="mb-ap-header">
                    <div id="mb-lp-logo">
                        <img src="./black-belt.png" alt="" id="mb-logo-icon" />
                        <p>Ypê Jiu-Jitsu</p>
                    </div>

                    <div id="mb-ap-back-btn" onClick={() => navigate("/")}>
                        <p>Voltar</p>
                    </div>
                </div>

                <div id="mb-ap-main-body">
                    <div id="mb-ap-main-title">
                        <h1>Histórico de presenças</h1>
                    </div>

                    <div id="mb-ap-search-bar">
                        <input type="text" placeholder="Buscar " id="mb-ap-search-input" />
                    </div>

                    <div id="mb-ap-search-results">
                        <div className="mb-ap-search-result-alunos">
                            <div className="mb-ap-result-index">
                                <p>Data</p>
                                <p>Presentes</p>
                            </div>

                        </div>
                        {turmas.map((turmas) => (
                            <>
                                <div className="mb-ap-search-result-alunos">

                                    <div className="mb-ap-result-value">
                                        <p>{turmas.data}</p>
                                        <p>{turmas.presencas[0]?.count || 0}</p>
                                    </div>

                                    <div className="mb-ap-details" onClick={() => navigate(`/detalhes/${turmas.id}`)}>
                                        <p>Ver Detalhes</p>
                                    </div>
                                </div >

                            </>

                        ))}

                    </div>

                    <div id="mb-ap-action-buttons">
                        <button className="mb-ap-action-btns" id="mb-ap-action-btn-save" onClick={() => navigate("/nova_turma")}>Criar Novo Dia</button>
                        <button className="mb-ap-action-btns" onClick={() => alert("Fiquei com preguiça")}>Ver mais</button>
                    </div>
                </div>
            </div>
        </>
    )
}
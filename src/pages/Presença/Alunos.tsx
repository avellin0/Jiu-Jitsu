import "./Alunos.css"
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";


export function Alunos() {

    const [alunos, setAlunos] = useState<any[]>([])
    
    useEffect(() => {
        supabase.from('alunos').select('*').then(({ data }) => setAlunos(data || []))
        console.log("esse é os dados do",alunos);
        
    }, [])

    const navigate = useNavigate()
    return (
        <div id="mb-alunos-page">

            <div id="mb-ap-header">
                <div id="mb-lp-logo">
                    <img src="./black-belt.png" alt="" id="mb-logo-icon" />
                    <p>Ypê Jiu-Jitsu</p>
                </div>

                <div id="mb-ap-back-btn" onClick={() => navigate("/historico")}>
                    <p>Voltar</p>
                </div>
            </div>

            <div id="mb-ap-main-body">
                <div id="mb-ap-main-title">
                    <h1>Controle de Presenças</h1>
                </div>

                <div id="mb-ap-search-bar">
                    <input type="text" placeholder="Buscar " id="mb-ap-search-input" />
                </div>

                <div id="mb-ap-search-results">
                    {alunos.map((aluno,index) => (
                        <>
                            <div className="mb-ap-search--result-alunos">
                                <div>
                                    <p key={index}>{aluno.nome}</p>
                                </div>

                                <div className="mb-ap-search-alunos-info">
                                    <div className="mb-ap-search-alunos-name-scope">
                                        <p>{aluno.faixa}</p>
                                    </div>

                                    <div className="mb-ap-search-checkbox-scope">
                                        <input type="checkbox" name="" className="mb-ap-search-checkbox" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <div id="mb-ap-action-buttons">
                    <button className="mb-ap-action-btns" id="mb-ap-action-btn-save" onClick={() => navigate("/historico")}>Salvar presenças</button>
                    <button className="mb-ap-action-btns" onClick={() => navigate("/novo_aluno")}>Adicionar Novo Aluno</button>
                </div>
            </div>
        </div>
    );
}
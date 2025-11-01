import "./Alunos.css"
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import faixa from "../../../public/black-belt.png"

export function Alunos() {

    const [alunos, setAlunos] = useState<any[]>([])
    const [selecionados, setSelecionados] = useState<number[]>([])

    const { turma } = useParams<{ turma: string }>()

    useEffect(() => {
        supabase.from('alunos').select('*').then(({ data }) => setAlunos(data || []))
        console.log("esse é os dados do", alunos);
        console.log("turma:", turma);

    }, [])


    const handleCheck = (id: number) => {
        setSelecionados(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id) // se já estava, tira
                : [...prev, id] // se não estava, adiciona
        )
    }

    let turma_id: number;

    if (turma === "tarde_adulto") {
        turma_id = 1
    } else if (turma === "tarde_kids") {
        turma_id = 2
    } else {
        turma_id = 3
    }

    console.log("esse é o turma_id:", turma_id);


    const CreateNewClass = async () => {
        const { data, error } = await supabase
            .from('aulas')
            .insert([{ turma_id }])
            .select()
            .single();

        if (error) {
            console.error("Erro ao inserir aula:", error);
            return null;
        }

        console.log("Aula criada com ID:", data.id);
        return data.id; // <-- retorna o ID diretamente
    };


    const InserirDados = async () => {

        const id = await CreateNewClass()


        const presencas = selecionados.map(alunoId => ({
            aluno_id: alunoId,
            aula_id: id,
            presente: true
        }));



        const { data, error } = await supabase
            .from('presencas')
            .insert(presencas);

        if (error) {
            console.error("Erro ao inserir presenças:", error);
            alert("Erro ao salvar presenças. Veja console.");
            return;
        }

        console.log("Presenças salvas:", data);

        navigate("/historico");

    }

    const navigate = useNavigate()

    return (
        <div id="mb-alunos-page">

            <div id="mb-ap-header">
                <div id="mb-lp-logo">
                    <img src={faixa} alt="" id="mb-logo-icon" />
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

                <div id="mb-aluno-search-results">
                    {alunos.map((aluno, index) => (
                        <>
                            <div className="mb-alunos-search--result-alunos" key={index}>
                                <div>
                                    <p>{aluno.nome}</p>
                                </div>

                                <div className="mb-ap-search-alunos-info">
                                    <div className="mb-ap-search-alunos-name-scope">
                                        <p>{aluno.faixa}</p>
                                    </div>

                                    <div className="mb-ap-search-checkbox-scope">
                                        <input
                                            className="mb-ap-search-checkbox"
                                            type="checkbox"
                                            checked={selecionados.includes(aluno.id)}
                                            onChange={() => handleCheck(aluno.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <div id="mb-ap-action-buttons">
                    <button className="mb-ap-action-btns" id="mb-ap-action-btn-save" onClick={() => InserirDados()}>Salvar presenças</button>
                    <button className="mb-ap-action-btns" onClick={() => navigate("/novo_aluno")}>Adicionar Novo Aluno</button>
                </div>
            </div>
        </div>
    );
}
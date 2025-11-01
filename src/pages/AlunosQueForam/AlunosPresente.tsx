import "./AlunosPresente.css"
import { useNavigate, useParams} from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import faixa from "../../../public/black-belt.png"

export function AlunosPresente() {
  const [alunos, setAlunos] = useState<any[]>([]);
  
  const {id} = useParams<{id: string}>()

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlunos = async () => {
      const { data, error } = await supabase
        .from("presencas")
        .select(`
          aluno_id,
          alunos ( nome, faixa )
        `)
        .eq("aula_id", id)
        .eq("presente", true);

      if (error) {
        console.error("Erro ao buscar alunos:", error);
        return;
      }

      console.log("dados recebidos:", data);
      setAlunos(data || []);
    };

    fetchAlunos();
  }, []);

  useEffect(() => {
    console.log("alunos atualizados:", alunos);
  }, [alunos]);

  return (
    <div id="mb-alunos-page">
      <div id="mb-ap-header">
        <div id="mb-alunosPresente-logo">
          <img src={faixa} alt="" id="mb-ap-logo-icon" />
          <p>Ypê Jiu-Jitsu</p>
        </div>

        <div id="mb-ap-back-btn" onClick={() => navigate("/historico")}>
          <p>Voltar</p>
        </div>
      </div>

      <div id="mb-ap-main-body">
        <div id="mb-ap-main-title">
          <h1>Alunos Presentes</h1>
        </div>

        <div id="mb-ap-search-results">
          {alunos.length === 0 && <p>Nenhum aluno presente.</p>}
          {alunos.map((a, i) => (
            <div className="mb-ap-search--result-alunos" key={i}>
              <div>
                <p>{a.alunos?.nome}</p>
              </div>
              <div className="mb-ap-search-alunos-info">
                <div className="mb-ap-search-alunos-name-scope">
                  <p>{a.alunos?.faixa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

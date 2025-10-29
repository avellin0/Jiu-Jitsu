import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { CreateClass } from "../pages/CriarTurma/CreateClass";
import { Alunos } from "../pages/Presença/Alunos";
import { NovoAluno } from "../pages/AdicionarAlunos/NovoAluno";
import { Frequencia } from "../pages/frequency/Frequencia";

export const router = createBrowserRouter([
 {
    path: "/",
    element: <LandingPage/>
 },
 {
    path: "historico",
    element: <Frequencia/>
 },
 {
    path: "/nova_turma",
    element: <CreateClass/>
 },
 {
    path: "/nova_turma_alunos",
    element: <Alunos/>
 },
 {
    path: "/novo_aluno",
    element: <NovoAluno/>
 }
])
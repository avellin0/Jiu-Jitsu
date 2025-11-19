import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { CreateClass } from "../pages/CriarTurma/CreateClass";
import { Alunos } from "../pages/Presença/Alunos";
import { NovoAluno } from "../pages/AdicionarAlunos/NovoAluno";
import { Frequencia } from "../pages/frequency/Frequencia";
import { AlunosPresente } from "../pages/AlunosQueForam/AlunosPresente";
import { Login } from "../pages/login/Login";
import { SignIn } from "../pages/SignIn/Sign";

export const router = createBrowserRouter([
 {
    path: "/",
    element: <LandingPage/>
 },
 {
    path: "/historico",
    element: <Frequencia/>
 },
 {
    path: "/nova_turma",
    element: <CreateClass/>
 },
 {
    path: "/nova_turma_alunos/:turma",
    element: <Alunos/>
 },
 {
    path: "/novo_aluno",
    element: <NovoAluno/>
 },
 {
   path: "/detalhes/:id",
   element: <AlunosPresente/>
 },
 {
   path: "/login",
   element: <Login/>
 },
 {
   path: "/sign",
   element: <SignIn/>
 }
])
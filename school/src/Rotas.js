import React from 'react'
import { Routes, Route } from "react-router-dom"

import Main from './components/template/Main'
import CrudAluno from './components/CrudAluno/CrudAluno'
import CrudCurso from './components/CrudCurso/CrudCurso'

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main>}
            />
            <Route path='/alunos' element={<CrudAluno />} />
            <Route path='/cursos' element={<CrudCurso />} />
            <Route path='*' element={

                <Main title="Bem Vindo!">
                    <div>Página não encontrada</div>
                </Main>} />

        </Routes>
    )
}
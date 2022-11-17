import React, { Component } from "react"
import axios from "axios"
import './CrudCarometro.css'

const urlAPI = "https://localhost:7008/api/carometro"

const urlAPICurso = "https://localhost:7008/api/curso"

const initialState = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0 },
    lista: [],
    listaFiltrada: [],

    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: '' },
    listaCurso: []
}

export default class CrudCarometro extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data, listaFiltrada: resp.data })
        })

        axios(urlAPICurso).then(resp => {
            this.setState({ listaCurso: resp.data })
        })
    }

    atualizaCampo(event) {
        const aluno = this.state.aluno
        const curso = this.state.curso
        aluno.codCurso = Number(curso.codCurso)

        if (event != -1) {
            const listaFiltrada = this.state.lista.filter(a => a.codCurso == event)
            this.setState({ listaFiltrada: listaFiltrada })
        } else {
            const listaFiltrada = this.state.lista
            this.setState({ listaFiltrada: listaFiltrada })
        }
    }

    renderForm() {
        return (
            <center>
                <div className="master" id="master">

                    <select id="filtro" name="codCurso" onChange={e => this.atualizaCampo(e.target.value)}>
                        <option value="" disabled="disabled" selected="selected">Filtrar</option>
                        <option value="-1">Todos os cursos</option>
                        {this.state.listaCurso.map(curso => (<option key={curso.id} value={curso.codCurso}
                        >{curso.nomeCurso}</option>))}
                    </select>

                    {this.state.listaFiltrada.map(
                        (aluno) =>
                            <div className="card" id="card">
                                <div className="picture" id="picture">
                                    <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"></img>
                                </div>
                                <h2>{aluno.ra}</h2>
                                <h2>{aluno.nome}</h2>
                                <h2>{aluno.codCurso}</h2>
                            </div>
                    )}

                </div>
            </center>
        )
    }

    render() {
        return (
            this.renderForm()
        )
    }

}
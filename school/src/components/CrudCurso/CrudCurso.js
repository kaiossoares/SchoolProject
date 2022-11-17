import React, { Component } from "react"
import axios from "axios"
import './CrudCurso.css'
import Main from "../template/Main"

const title = "Cadastro de Cursos"

const urlAPI = "https://localhost:7008/api/curso"
const initialState = {
    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: '' },
    lista: []
}

export default class CrudCurso extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ curso: initialState.curso })
    }

    salvar() {
        const curso = this.state.curso
        curso.codCurso = Number(curso.codCurso)
        const metodo = curso.id ? 'put' : 'post'
        const url = curso.id ? `${urlAPI}/${curso.id}` : urlAPI

        axios[metodo](url, curso)
            .then(resp => {
                const lista = this.getListaAtualizada(resp.data)
                this.setState({ curso: initialState.curso, lista })
            })
    }

    getListaAtualizada(curso, add = true) {
        const lista = this.state.lista.filter(a => a.id !== curso.id)
        if (add) lista.unshift(curso)
        return lista
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const curso = { ...this.state.curso };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        curso[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ curso });
    }

    carregar(curso) {
        this.setState({ curso })
    }

    remover(curso) {
        const url = urlAPI + "/" + curso.id;
        if (window.confirm("Confirma remoção do curso: " + curso.codCurso)) {
            console.log("entrou no confirm");

            axios['delete'](url, curso)
                .then(resp => {
                    const lista = this.getListaAtualizada(curso, false)
                    this.setState({ curso: initialState.curso, lista })
                })
        }
    }

    renderForm() {
        return (
            <div className="inclui-container">
                <label> Código: </label>
                <input
                    type="number"
                    id="codCurso"
                    placeholder="Código do curso"
                    className="form-input"
                    name="codCurso"

                    value={this.state.curso.codCurso}

                    onChange={e => this.atualizaCampo(e)}
                />
                <label> Nome: </label>
                <input
                    type="text"
                    id="nomeCurso"
                    placeholder="Nome do curso"
                    className="form-input"
                    name="nomeCurso"

                    value={this.state.curso.nomeCurso}

                    onChange={e => this.atualizaCampo(e)}
                />          

                <label> Período: </label>
                <select id="periodo" name="periodo" onChange={e => this.atualizaCampo(e)}>
                    <option>Selecione o período</option>
                    <option value="M">Matutino  </option>
                    <option value="V">Vespertino</option>
                    <option value="N">Noturno   </option>
                </select>

                <button className="btnSalvar"
                    onClick={e => this.salvar(e)} >
                    Salvar
                </button>
                <button className="btnCancelar"
                    onClick={e => this.limpar(e)} >
                    Cancelar
                </button>
            </div>
        )
    }

    renderTable() {
        return (
            <div className="listagem">
                <table className="listaCursos" id="tblListaCursos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloCod">Código do curso</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloPeriodo">Período</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (curso) =>
                                <tr key={curso.id}>
                                    <td>{curso.codCurso}</td>
                                    <td>{curso.nomeCurso}</td>
                                    <td>{curso.periodo}</td>
                                    <td>
                                        <button onClick={() => this.carregar(curso)} >
                                            Altera
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.remover(curso)} >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <Main title={title}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
import React, { Component } from "react"
import axios from "axios"
import './CrudCarometro.css'

const urlAPI = "https://localhost:7008/api/carometro"

const initialState = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0 },
    lista: []
}

export default class CrudCarometro extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    carregar(carometro) {
        this.setState({ carometro })
    }

    renderForm() {
        return (
            <div className="master" id="master">
                <div className="card" id="card">
                    <div className="picture" id="picture"></div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.renderForm()
        )
    }

}
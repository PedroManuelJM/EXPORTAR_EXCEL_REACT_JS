
import './App.css';

import React, { Component } from 'react';
import { SuperHeroesData } from './dataLocal';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; // excel
import github from './assets/img/github.png';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listaSuperheroes: [], // arreglo para guardar la lista
    }
  }
  componentDidMount() {
    this.setState({
      listaSuperheroes: SuperHeroesData, // lista == dataLocal

    })
    console.log(SuperHeroesData) // mostrando por consola la dataLocal

  }
  dibujarSuperheroes = (datosTabla) => {
    return (
      <>
        <br />
        <div align="center">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="btn btn-success"
            table="table-to-xls"
            filename="data_superheroe"
            sheet="data_superheroe"
            buttonText="Exportar a excel"
          />
        </div>
        <br />
        <table className="table" id="table-to-xls">
          <thead className="thead-dark">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Personaje de ficción</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla.map(itemCategoria =>
              <tr key={itemCategoria.id}>
                <td>{itemCategoria.id}</td>
                <td>{itemCategoria.nombres}</td>
                <td>{itemCategoria.superheroe}</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    )
  }
  render() {
    let contenido = this.dibujarSuperheroes(this.state.listaSuperheroes);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div>
                <br/>
                <a href="https://github.com/PedroManuelJM" target="_blank">
                  <h6 className="float-right"> <img src={github} width="12%" /> PedroManuelJM</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2">
        
            </div>
            <div className="col-md-6 col-sm-6">
              {contenido}
            </div>
          </div>
        </div>
      </>
    );
  }
};

import React, { Component, Fragment } from 'react';
import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Formulario de Cadastro</h1>
        <FormCadastro />
      </Fragment>
    );
  }
}

export default App;

// npx create-react-app nome-projeto
// npm start
// npm audit fix --force
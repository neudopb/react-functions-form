import React, { Component } from "react";
import "./App.css";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import { Container, Typography } from "@material-ui/core";

class App extends Component {

  enviarDados(dados) {
    console.log(dados);
  }

  validarCpf(cpf) {
    if (cpf.length !== 11) {
      return {valido:false, texto:"CPF deve ter 11 digitos"};
    } else {
      return {valido:true, texto:""};
    }
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormCadastro enviarDados={this.enviarDados} validarCpf={this.validarCpf} />
      </Container>
    );
  }
}

export default App;

// npx create-react-app nome-projeto
// npm start
// npm audit fix --force

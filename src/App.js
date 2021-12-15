import React, { Component } from "react";
import "./App.css";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import {
  validarCpf,
  validarSenha,
  validarConfirmarSenha,
} from "./models/cadastro";
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  enviarDados(dados) {
    console.log(dados);
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            confirmSenha: validarConfirmarSenha,
          }}
        >
          <FormCadastro enviarDados={this.enviarDados} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

export default App;

// npx create-react-app nome-projeto
// npm start
// npm audit fix --force

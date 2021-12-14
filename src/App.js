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
      return { valido: false, texto: "CPF deve ter 11 digitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  validarSenha(senha) {
    if (senha.length < 5 || senha.length > 45) {
      return { valido: false, texto: "Senha deve ter entre 5 e 45 caracteres" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  validarConfirmarSenha(senha, confirmarSenha) {
    if (senha !== confirmarSenha) {
      return { valido: false, texto: "Senhas não conferem" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormCadastro
          enviarDados={this.enviarDados}
          validarCpf={this.validarCpf}
          validarSenha={this.validarSenha}
          validarConfirmarSenha={this.validarConfirmarSenha}
        />
      </Container>
    );
  }
}

export default App;

// npx create-react-app nome-projeto
// npm start
// npm audit fix --force

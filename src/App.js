import React, { Component } from "react";
import "./App.css";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormCadastro />
      </Container>
    );
  }
}

export default App;

// npx create-react-app nome-projeto
// npm start
// npm audit fix --force

import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormCadastro({ enviarDados }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const formularios = [
    <DadosUsuario enviarDados={coletarDados} />,
    <DadosPessoais enviarDados={coletarDados} />,
    <DadosEntrega enviarDados={coletarDados} />,
    <Typography variant="h5" align="center">
      Cadastro Realizado com Sucesso!!!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      enviarDados(dadosColetados);
    }
  });

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormCadastro;

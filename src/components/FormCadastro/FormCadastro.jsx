import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormCadastro({
  enviarDados,
  validarCpf,
  validarSenha,
  validarConfirmarSenha
}) {
  
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario
      enviarDados={proximo}
      validarSenha={validarSenha}
      validarConfirmarSenha={validarConfirmarSenha}
    />,
    <DadosPessoais enviarDados={proximo} validarCpf={validarCpf} />,
    <DadosEntrega enviarDados={enviarDados} />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}

export default FormCadastro;

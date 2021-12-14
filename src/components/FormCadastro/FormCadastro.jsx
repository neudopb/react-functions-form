import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormCadastro({enviarDados, validarCpf}) {

  return (
    <>
      <DadosPessoais enviarDados={enviarDados} validarCpf={validarCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormCadastro;

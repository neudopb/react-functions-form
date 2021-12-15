import { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampo(evento) {
    const { name, value } = evento.target;
    const newErros = { ...erros };
    newErros[name] = validacoes[name](value);
    setErros(newErros);
  }

  function validarConfirmSenha(evento, senha) {
    const { name, value } = evento.target;
    const newErros = { ...erros };
    newErros[name] = validacoes[name](value, senha);
    setErros(newErros);
  }

  function validarEnvio() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampo, validarEnvio, validarConfirmSenha];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}

export default useErros;

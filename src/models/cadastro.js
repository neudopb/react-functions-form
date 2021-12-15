function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 6 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 6 e 72 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarConfirmarSenha(senha, confirmarSenha) {
  if (senha !== confirmarSenha) {
    return { valido: false, texto: "Senhas não conferem" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCpf, validarSenha, validarConfirmarSenha };
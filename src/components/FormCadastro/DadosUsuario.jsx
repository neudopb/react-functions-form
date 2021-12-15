import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ enviarDados }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampo, validarEnvio, validarConfirmSenha] =
    useErros(validacoes);

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (validarEnvio()) {
          enviarDados({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
        onBlur={validarCampo}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={confirmSenha}
        onChange={(evento) => {
          setConfirmSenha(evento.target.value);
        }}
        onBlur={(evento) => {
          validarConfirmSenha(evento, senha);
        }}
        error={!erros.confirmSenha.valido}
        helperText={erros.confirmSenha.texto}
        id="confirmSenha"
        name="confirmSenha"
        label="Confirmar Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;

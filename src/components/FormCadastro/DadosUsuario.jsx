import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ enviarDados, validarSenha, validarConfirmarSenha }) {

  const [email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const[confirmSenha, setConfirmSenha] = useState("");
  const[erros, setErros] = useState({senha:{valido:true, texto:""}, confirmSenha:{valido:true, texto:""}});

  return (
    <form onSubmit={(evento) => {
      evento.preventDefault();
      enviarDados();
    }}>

      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
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
        onBlur={(event) => {
          const valid = validarSenha(senha);
          setErros({...erros, senha: valid});
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
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
        onBlur={(event) => {
          const valid = validarConfirmarSenha(senha, confirmSenha)
          setErros({...erros, confirmSenha: valid});
        }}
        error={!erros.confirmSenha.valido}
        helperText={erros.confirmSenha.texto}
        id="confirmSenha"
        label="Confirmar Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;

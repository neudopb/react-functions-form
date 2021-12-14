import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({enviarDados, validarCpf}) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        enviarDados();
      }}
    >

      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        id="nome"
        label="Nome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={sobrenome}
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={cpf}
        onChange={(evento) => {
          if (evento.target.value.length <= 11) {
            setCpf(evento.target.value);
          }
        }}
        onBlur={(event) => {
          const valid = validarCpf(cpf);
          setErros({cpf:valid});
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        type="number"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;

import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosPessoais({ enviarDados }) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampo(evento) {
    const {name, value} = evento.target;
    const newErros = {...erros};
    newErros[name] = validacoes[name](value);
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

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (validarEnvio()) {
          enviarDados({nome, sobrenome, cpf, promocoes, novidades});
        }
      }}
    >

      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        id="nome"
        name="nome"
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
        name="sobrenome"
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
        onBlur={validarCampo}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;

import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ enviarDados }) {

    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            enviarDados({cep, estado, cidade, endereco, numero});
        }}>

            <TextField 
                value={cep}
                onChange={(evento) => {
                    setCep(evento.target.value);
                }}
                id="cep"
                name="cep"
                label="CEP"
                type="number"
                required
                variant="outlined"
                margin="normal"
            />

            <TextField 
                value={estado}
                onChange={(evento) => {
                    setEstado(evento.target.value);
                }}
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                required
                variant="outlined"
                margin="normal"
            />

            <TextField  
                value={cidade}
                onChange={(evento) => {
                    setCidade(evento.target.value);
                }}
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                required
                variant="outlined"
                margin="normal"
            />

            <TextField  
                value={endereco}
                onChange={(evento) => {
                    setEndereco(evento.target.value);
                }}
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField  
                value={numero}
                onChange={(evento) => {
                    setNumero(evento.target.value);
                }}
                id="numero"
                name="numero"
                label="Número"
                type="number"
                required
                variant="outlined"
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>

        </form>
    )
}

export default DadosEntrega;
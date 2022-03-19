import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@mui/material";

import styles from "./Form.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function Form() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  function registerList() {
    navigate("/listar");
  }

  //Botão cadastrar
  const armazenar = (event) => {
    event.preventDefault();

    let dados = JSON.parse(localStorage.getItem("dadosPac")) || [];

    let todosDados = {
      name,
      birthdate,
      cpf,
      address,
      gender,
      status,
    };

    let novaLista = JSON.parse(localStorage.getItem("dadosPac"));
    if (cpf.length < 11 || cpf.length > 11) {
      alert("CPF inválido! CPF precisa de 11 digitos");
    } else {
      for (let i of novaLista) {
        if (i.cpf === cpf) {
          alert(`CPF "${cpf}" já cadstrado!`);
          cpf.focus();
        }
      }
    }

    dados.push(todosDados);

    localStorage.setItem("dadosPac", JSON.stringify(dados));
    alert(
      "Cadastro realizado com sucesso!\nSerá encaminhado a lista de cadastro."
    );
    // navigate("/listar");
  };

  return (
    <div className={styles.init}>
      <form name="myForm" onSubmit={armazenar}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              id="name"
              placeholder="Digite o seu nome..."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Data nascimento:
            <input
              id="nasc"
              name="data"
              type="date"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            CPF:
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="Apenas números..."
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>Sexo:</label>

          <input
            type="radio"
            id="masc"
            name="sexo"
            value="masc"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "masc"}
            required
          />
          <label htmlFor="masc">Masculino</label>

          <input
            type="radio"
            id="fem"
            name="sexo"
            value="fem"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "fem"}
            required
          />
          <label htmlFor="fem">Feminino</label>

          <input
            type="radio"
            id="outro"
            name="sexo"
            value="outro"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "outro"}
            required
          />
          <label htmlFor="outro">Outro</label>
        </div>
        <div>
          <label>
            Endereço:
            <input
              id="endereco"
              name="endereco"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Digite o seu endereço..."
            />
          </label>
        </div>
        <div>
          <label htmlFor="status">
            Status:
            <select
              name="status"
              id="status"
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Escolha uma opsão</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </label>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={armazenar}>
              Cadastrar(test)
            </Button>
          </ThemeProvider>


          <button>Botão(older)</button>


        </div>
      </form>
      <div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={registerList}>
            Lista de cadastro
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Form;

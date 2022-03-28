import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import {
  Button,
  createTheme,
  ThemeProvider,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

let dados;

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
  function loadPageRegister() {
    document.location.reload(true);
  }
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

    let novaLista = JSON.parse(localStorage.getItem("dadosPac")) || [];

    if (name.length <= 9) {
      alert("Digite o nome completo.");
      return;
    } else if (birthdate === "") {
      alert("Digite a data de nascimento!");
      return;
    } else if (cpf === "") {
      alert("Digite o CPF!");
      return;
    } else if (cpf.length < 11 || cpf.length > 11) {
      alert("CPF inválido! CPF precisa de 11 digitos");
      return;
    } else {
      for (let i of novaLista) {
        if (i.cpf === cpf) {
          alert(`CPF "${cpf}" já cadstrado!`);
          return;
        }
      }
    }
    if (gender === "") {
      alert("Escolha o sexo!");
      return;
    }
    if (status === "") {
      alert("Escolha qual o Status");
      return;
    }

    dados.push(todosDados);

    localStorage.setItem("dadosPac", JSON.stringify(dados));
    alert("Cadastro realizado com sucesso!");
    // navigate("/listar");
    loadPageRegister();
  };

  return (
    <div>
      <form name="myForm" onSubmit={armazenar}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth={true}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome:"
              placeholder="Digite o nome completo..."
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth={true}
              name="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              label="Data Nascimento:"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth={true}
              type="text"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              label="CPF:"
              placeholder="Digite o CPF..."
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Sexo:</FormLabel>
              <RadioGroup
                row={true}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  htmlFor="fem"
                  value="fem"
                  control={<Radio />}
                  label="Feminino"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "fem"}
                />
                <FormControlLabel
                  htmlFor="masc"
                  value="masc"
                  control={<Radio />}
                  label="Masculino"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "masc"}
                />
                <FormControlLabel
                  htmlFor="outro"
                  value="outro"
                  control={<Radio />}
                  label="Outro"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "outro"}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth={true}
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              label="Endereço:"
              placeholder="Digite o endereço..."
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <FormControl
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormLabel id="demo-radio-buttons-group-label">Status:</FormLabel>
              <RadioGroup
                row={true}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ativo"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="ativo"
                  control={<Radio />}
                  label="Ativo"
                  onChange={(e) => setStatus(e.target.value)}
                  checked={status === "ativo"}
                />
                <FormControlLabel
                  value="inativo"
                  control={<Radio />}
                  label="Inativo"
                  onChange={(e) => setStatus(e.target.value)}
                  checked={status === "inativo"}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <div>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                onClick={armazenar}
                item
                sm={6}
                xs={12}
              >
                Cadastrar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={registerList}
                item
                sm={6}
                xs={12}
              >
                Lista de cadastro
              </Button>
            </ThemeProvider>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default Form;

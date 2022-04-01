import React, { useEffect, useState } from "react";
import {
  Button,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./Listar.module.css";

//Tests
let patientRecord;
let patient;
let codigo;

function Listar() {
  const [nameSearch, setNameSearch] = useState("");
  const [showListRegister, setShowListRegister] = useState(true);
  const [showSearch, setShowSearch] = useState(null);

  const hide = () => setShowListRegister(false);
  const show = () => setShowListRegister(true);

  const listaDePacientes = JSON.parse(localStorage.getItem("dadosPac")) || [];

  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  });

  function search(event) {
    event.preventDefault();

    //resgata dados do localstorage e armazena com nome "dadosPac"
    let dados = JSON.parse(localStorage.getItem("dadosPac")) || [];

    //criar lista no localstorage com nome "dadosPac" com os valores da variável "dados"
    localStorage.setItem("dadosPac", JSON.stringify(dados));

    //tranformar a lista de string para array
    let novaLista = JSON.parse(localStorage.getItem("dadosPac"));

    let valid = false;
    while (nameSearch.length === 0)
      nameSearch = alert("Precisa digitar um nome!");
    while (valid !== true) {
      let confirm = `O nome "${nameSearch}" não está na lista de cadastra!`;
      for (let i of novaLista) {
        if (i.name === nameSearch) {
          confirm = `"${i.name}" esta cadastrado`;
          patientRecord = JSON.stringify(i);

          patient =
            "Nome: " +
            i.name +
            "<br>CPF: " +
            i.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4") +
            "<br>Data nasc: " +
            i.birthdate +
            "<br>Sexo: " +
            i.gender +
            "<br>Status: " +
            i.status;

          setShowListRegister(false);
          setShowSearch(true);
        }
      }
      alert(confirm);
      break;
    }
  }

  //Botão remover

  function loadPageRemove() {
    document.location.reload(true);
  }

  const remove = (event) => {
    event.preventDefault();

    //resgata dados do localstorage e armazena com nome "dadosPax"
    let dados = JSON.parse(localStorage.getItem("dadosPac")) || [];

    //criar lista no localstorage com nome "dadosPac" com os valores da variável "dados"
    localStorage.setItem("dadosPac", JSON.stringify(dados));

    //tranformar a lista de string para array
    let novaLista = JSON.parse(localStorage.getItem("dadosPac"));
    //console.log('novaLista', novaLista)

    let valid = false;
    while (nameSearch.length === 0)
      nameSearch = alert("Precisa digitar um nome!");
    while (valid !== true) {
      let returno = `O nome "${nameSearch}" não está cadastrado!`;
      for (let i of novaLista) {
        if (i.name === nameSearch) {
          let confirm = window.confirm(
            `Confirma a remoção de "${i.name}" da lista de cadastrado?`
          );
          if (confirm) {
            let item = JSON.parse(localStorage.getItem("dadosPac")); //Lista transformada em objeto

            var myArray = item;
            var newArray = myArray.filter((item) => item.name !== nameSearch);
            //alert(JSON.stringify(newArray)); //lista atualizada sem o nome desejada

            //criar lista no localstorage com nome "dadosPac" com os valores da variável "newArray"
            localStorage.setItem("dadosPac", JSON.stringify(newArray));
            loadPageRemove();
            return;
          }
        }
      }
      alert(returno);
      break;
    }
  };
  /*
  useEffect(() => {
    //document.location.reload(true);
  }, [])
*/

  function backRegistrationPage() {
    navigate("/cadastro");
  }

  return (
    <div className={styles.init}>
      <h1>Lista de cadastro</h1>
      <Grid container spacing={1}>
        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth={true}
            name="name"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            label="Pesquisa por nome:"
            placeholder="Digite o nome completo..."
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Button
            fullWidth={true}
            sx={{
              whiteSpace: "nowrap",
              marginTop: "1.5em",
              border: "2px solid #222",
              padding: "6px 20px",
              color: "#222",
              fontWeight: "bold",
              borderRadius: "0",
            }}
            onClick={search}
          >
            Pequisar
          </Button>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Button
            fullWidth={true}
            sx={{
              whiteSpace: "nowrap",
              marginTop: "1.5em",
              border: "2px solid #222",
              padding: "6px 20px",
              color: "#222",
              fontWeight: "bold",
              borderRadius: "0",
            }}
            onClick={remove}
          >
            Remover
          </Button>
        </Grid>
        {showSearch ? (
          <Grid item sm={6} xs={12}>
            <div className={styles.toSearch}>
              <hr></hr>
              <h2>Paciente pesquisado</h2>

              <div dangerouslySetInnerHTML={{ __html: patient }}></div>

              <hr></hr>
              <div>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" onClick={show}>
                    Mostrar Lista Cadastro
                  </Button>
                  <Button variant="contained" color="primary" onClick={hide}>
                    Esconder Lista Cadastro
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </Grid>
        ) : null}
        {showListRegister ? (
          <div id="listaCadastro">
            <hr></hr>
            <h2>Lista de pacientes cadastrados</h2>
            <table>
              <thead>
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Data nasc</th>
                  <th>Sexo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {listaDePacientes.map((paciente) => (
                  <tr>
                    <td>{paciente.cpf}</td>
                    <td>{paciente.name}</td>
                    <td>{paciente.address}</td>
                    <td>{paciente.birthdate}</td>
                    <td>{paciente.gender}</td>
                    <td>{paciente.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr></hr>
          </div>
        ) : null}
      </Grid>
      <Grid item sm={6} xs={12}>
        <Button
          sx={{
            whiteSpace: "nowrap",
            marginTop: "1.5em",
            border: "2px solid #222",
            padding: "6px 20px",
            color: "#222",
            fontWeight: "bold",
            borderRadius: "0",
          }}
          onClick={backRegistrationPage}
        >
          Cadastro
        </Button>
      </Grid>
    </div>
  );
}

export default Listar;

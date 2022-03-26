import React, { useEffect, useState } from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Listar.module.css";

//Tests
let patientRecord;
let eu;
let codigo;

function Listar() {
  const [nameSearch, setNameSearch] = useState("");
  const [showListRegister, setShowListRegister] = useState(true);
  const [showSearch, setShowSearch] = useState(null);

  const hide = () => setShowListRegister(false);
  const show = () => setShowListRegister(true);

  const listaDePacientes = JSON.parse(localStorage.getItem("dadosPac")) || [];

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

          eu =
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

  return (
    <div className={styles.init}>
      <div>
        <h1>Lista de cadastro</h1>
        <div>
          <label>
            Pesquisar paciente:
            <input
              type="search"
              placeholder="Digite o nome..."
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />
          </label>
          <button onClick={search}>Pequisar</button>
          <button onClick={remove}>Remover</button>
        </div>
        {showSearch ? ( //Se confirma null
          <div className={styles.toSearch}>
            <hr></hr>
            <h2>Paciente pesquisado</h2>

            <div dangerouslySetInnerHTML={{ __html: eu }}></div>

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
        ) : null}
        {showListRegister ? ( //Se confirma null
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
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default Listar;

import React, { useState } from "react";
//import html from "react-inner-html";
import { Link } from "react-router-dom";

import styles from "./Listar.module.css";

function Listar() {
  const [nameSearch, setNameSearch] = useState("");
  const [showListRegister, setShowListRegister] = useState(true);
  const [showSearch, setShowSearch] = useState(null);

  const hide = () => setShowListRegister(false);
  const show = () => setShowListRegister(true);

  const listaDePacientes = JSON.parse(localStorage.getItem("dadosPac")) || [];

  function search(event) {
    event.preventDefault();

    //resgata dados do localstorage e armazena com nome "dadosPac"
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
      let confirm = `O nome "${nameSearch}" não está na lista de cadastra!`;
      for (let i of novaLista) {
        if (i.name === nameSearch) {
          confirm = `"${i.name}" esta cadastrado`;
          let cadastroPaciente = JSON.stringify(i);

          setShowListRegister(false);
          setShowSearch(true);

          //Preciso eliminar esse 'getElementById()"
          document.getElementById("patientName").innerHTML = cadastroPaciente;
        }
      }
      alert(confirm);
      break;
    }
  }

  //Botão remover
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

            return;
          }
        }
      }
      alert(returno);
      break;
    }
  };

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
          <div className={styles.toSearch} id="toSearch">
            <hr></hr>
            <h2>Paciente pesquisado</h2>
            <div id="patientName"></div>
            <hr></hr>
            <div>
              <button onClick={show}>Mostrar Lista Cadastro</button>
              <button onClick={hide}>Esconder Lista Cadastro</button>
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

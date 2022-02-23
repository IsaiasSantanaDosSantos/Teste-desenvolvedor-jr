import React, { useState } from "react";

import styles from "./Form.module.css";

function Form() {

  
  const [nome, setNome] = useState();

  const armazenar = (chave, valor) => {
    let name = document.getElementById("name");
    let dataNasc = document.getElementById("nasc");
    let doc = document.getElementById("cpf");
    let endereco = document.getElementById("endereco");

    let dados = JSON.parse(localStorage.getItem("dadosPac"));

    let sexo = document.forms["myForm"]["sexo"];
    let sexoPes =
      sexo[0].checked === false &&
      sexo[1].checked === false &&
      sexo[2].checked === false;
    if (sexoPes) {
      alert("Por favor, escolha um sexo.");
    }

    const select = document.querySelector("#status");

    const valorSelect = select.value;

    if (dados == null) {
      localStorage.setItem("dadosPac", "[]");
      dados = [];
    }

    let sexoPessoa = document.querySelector('input[name="sexo"]:checked').value;

    let todosDados = {
      nome: name.value,
      Nasc: dataNasc.value,
      cpf: doc.value,
      end: endereco.value,
      sexo: sexoPessoa,
      status: valorSelect,
    };

    //alert(JSON.stringify(todosDados))

    dados.push(todosDados);

    localStorage.setItem("dadosPac", JSON.stringify(dados));
  };

  function consultar() {
    let dados = JSON.parse(localStorage.getItem("dadosPac"));

    localStorage.setItem("dadosPac", JSON.stringify(dados));

    document.getElementById("titlleCadastro").innerHTML = "Lista paciente";

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("patientList").style.display = "block";

    document.getElementById("patientList").innerHTML = JSON.stringify(dados);

    //alert(JSON.stringify(todosDados))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave);
  };

  return (
    <div className={styles.init}>
      <form name="myForm" id="registerForm">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome..."
            required
            onClick={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Data nascimento:</label>
          <input id="nasc" name="data" type="date" required />
        </div>
        <div>
          <label>CPF:</label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            placeholder="Digite sem pontos..."
            required
          />
        </div>
        <div>
          <label>Sexo:</label>
          <input type="radio" id="masc" name="sexo" value="masc" />
          <label htmlFor="masc">Masculino</label>

          <input type="radio" id="fem" name="sexo" value="fem" />
          <label htmlFor="fem">Feminino</label>

          <input type="radio" id="outro" name="sexo" value="outro" />
          <label htmlFor="outro">Outro</label>
        </div>
        <div>
          <label>Endereço:</label>
          <input
            id="endereco"
            name="endereco"
            type="text"
            placeholder="Digite o seu endereço..."
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>

          <select name="status" id="status" required>
            <option value="">Escolha uma opsão</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <div>
          <button onClick={() => armazenar("ls_nome", nome)}>Cadastrar</button>
        </div>
      </form>

      <div id="patientList"></div>
      <div id="removePatient"></div>
      <div className={styles.register}>
        <button id="btnConsult" onClick={() => consultar()}>
          Lista Paciente
        </button>
        <button onClick={() => apagar("ls_nome")}>Renover Paciente</button>
      </div>
    </div>
  );
}

export default Form;

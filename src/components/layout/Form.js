import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Listar from "../pages/Listar";
//import PesquisarPaciente from "../pages/PesquisarPaciente";

import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [nameSeach, setNameSeach] = useState("");
  const [div, setDiv] = useState("");
  const navigate = useNavigate();

  /*
  const seach = (event) => {
  event.preventDefault()

  let consult =localStorage.getItem('name', 'nameSeach' )

  console.log(consult)
*/

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

    dados.push(todosDados);

    localStorage.setItem("dadosPac", JSON.stringify(dados));
    navigate("/listar");
    //todosDados = dados preenchido no formulario recenetimente
    //dados é tudo que está armazenado
    //console.log(todosDados.cpf)
  };

  function seach(event) {
    event.preventDefault();

    //resgata dados do localstorage e armazena com nome "dadosPax"
    let dados = JSON.parse(localStorage.getItem("dadosPac")) || [];

    //lista com as chaves
    /*
    let todosDados = {
      name,
      birthdate,
      cpf,
      address,
      gender,
      status,
    };
    */
    //dados.push(todosDados); //Comentei para não ficar salvando todas as vezes

    //criar lista no localstorage com nome "dadosPac" com os valores da variável "dados"
    localStorage.setItem("dadosPac", JSON.stringify(dados));
    //navigate("/listar"); //ir para a page lista pacientes

    //tranformar a lista de string para array
    let novaLista = JSON.parse(localStorage.getItem("dadosPac"));
    //console.log('novaLista', novaLista)
    
    
  
        let valid = false
        while (nameSeach.length === 0) 
          nameSeach = alert('Precisa digitar um nome!');
        while (valid !== true){
          let confirm = `O nome ${nameSeach} não está cadastrado!`
          for (let i of novaLista) {
            if (i.name === nameSeach) {
              confirm = `${i.name} esta cadastrado`;
              let cadastroPaciente = JSON.stringify(i)
              document.getElementById('listar').style.display="none"
              document.getElementById("seach").innerHTML = JSON.stringify(i)
              console.log(cadastroPaciente)
            }
          }
         alert(confirm)
          break
        }
  };

  // Função de teste!

  const add = (event) => {
    event.preventDefault();

    //resgata dados do localstorage e armazena com nome "dadosPax"
    let dados = JSON.parse(localStorage.getItem("dadosPac")) || [];

    //lista com as chaves
    /*
    let todosDados = {
      name,
      gender,
      status,
    };
    */
    //dados.push(todosDados); //Comentei para não ficar salvando todas as vezes

    //criar lista no localstorage com nome "dadosPac" com os valores da variável "dados"
    localStorage.setItem("dadosPac", JSON.stringify(dados));
    //navigate("/listar"); //ir para a page lista pacientes

    //tranformar a lista de string para array
    let novaLista = JSON.parse(localStorage.getItem("dadosPac"));
    //console.log('novaLista', novaLista)
    
    
  
        let valid = false
        while (nameSeach.length === 0) 
          nameSeach = alert('Precisa digitar um nome: ');
        while (valid !== true){
          let confirm = `O nome ${nameSeach} não está cadastrado!`
          for (let i of novaLista) {
            if (i.name === nameSeach) {
              confirm = `${i.name} esta cadastrado`;
              let cadastroPaciente = JSON.stringify(i)
              console.log(cadastroPaciente)
            }
          }
         alert(confirm)
          break
        }

  };

  // Fim função teste

  return (
    <div className={styles.init}>
      <form name="myForm" id="registerForm" onSubmit={armazenar}>
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
              placeholder="Digite sem pontos..."
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
          <button>Cadastrar</button>
        </div>
      </form>

      <div id="listar" >
        <Listar />
      </div>
      <div id="seach"></div>
      <div>
        <div className={styles.init}>
          <label htmlFor="myForm">
            Pesquisar paciente:
            <input
              type="search"
              placeholder="Digite o nome..."
              value={nameSeach}
              onChange={(e) => setNameSeach(e.target.value)}
            />
          </label>

          <button onClick={seach}>Pequisar</button>
          <button onClick={add}>Renover</button>
          <div value={div} onChange={(e) => setDiv(e.target.value)}></div>
        </div>
      </div>
    </div>
  );
}

export default Form;

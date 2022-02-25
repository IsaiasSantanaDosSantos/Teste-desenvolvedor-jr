import React, { useState } from "react";

import styles from "./PesquisarPaciente.module.css";

function PesquisarPaciente() {
  const [name, setName] = useState("");

  // const nome = dados(localStorage.name).filter (paciente.name === "Rafael")

  //localStorage.setItem("dadosPac", JSON.stringify(dados));

  return (
    <div>
      <div className={styles.init}>
        <label htmlFor="myForm">
          Pesquisar paciente:
          <input
            type="search"
            placeholder="Digite o nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button>Pequisar Paciente</button>
      </div>
      <div>
        <button>Renover Paciente</button>
      </div>
    </div>
  );
}

export default PesquisarPaciente;

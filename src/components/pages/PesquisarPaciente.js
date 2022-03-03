import React, { useState } from "react";

import styles from "./PesquisarPaciente.module.css";

function PesquisarPaciente() {
  const [name, setName] = useState("");

  // const nome = dados(localStorage.name).filter (paciente.name === "Rafael")

  //localStorage.setItem("dadosPac", JSON.stringify(dados));

  return (
    <div className={styles.init}>
      <div>
        <button>Renover Paciente</button>
      </div>
    </div>
  );
}

export default PesquisarPaciente;

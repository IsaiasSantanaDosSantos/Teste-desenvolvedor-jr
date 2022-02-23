import React, { useState } from "react";

import Form from "../layout/Form.js";

import styles from "./Cadastro.module.css";

function Cadastro() {
  return (
    <div className={styles.init}>
      <h1 id="titlleCadastro">Cadastro</h1>
      <p>
        A clínica ACME deseja ter uma solução web para consultar, cadastre-se e
        conheça todas as facilidades.
      </p>
      <Form />
    </div>
  );
}

export default Cadastro;

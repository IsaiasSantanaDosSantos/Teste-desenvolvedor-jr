//import React, { useState } from "react";

import Form from "../layout/Form.js";

import styles from "./Cadastro.module.css";

function Cadastro() {
  return (
    <div className={styles.init}>
      <h1>Cadastro</h1>
      <p>
        A clínica Acmi deseja ter uma solução web para consulta, cadastre-se e
        conheça todas as facilidades.
      </p>
      <Form />
    </div>
  );
}

export default Cadastro;

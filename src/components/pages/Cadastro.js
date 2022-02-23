import React, {useState} from 'react'

import Form from '../layout/Form.js'

import styles from "./Cadastro.module.css"

function Cadastro() {

    

    return (
        <div className={styles.init}>
            <h1>Cadastro</h1>
            <p>A clínica ACME deseja ter uma solução web para consultar, cadastre-se e conheça todas as facilidades.</p>
            <Form />
            <div className={styles.list}><h1>Lista paciente</h1>
            </div>
            <div className={styles.consult}><h1>Consultar paciente</h1>
            </div>
        </div>
        
    )
    
}

export default Cadastro
import React, {useState} from 'react'

import styles from "./Cadastro.module.css"

function Cadastro() {

    

    return (
        <div className={styles.init}>
            <h1>Cadastro</h1>
            <p>A clínica ACME deseja ter uma solução web para consultar, cadastre-se e conheça todas as facilidades.</p>
            <form>
                <div>
                    <label>Nome:</label>
                    <input name="name" type="text" placeholder="Digite o seu nome..." required />
                </div>
                <div>
                    <label>Data nascimento:</label>
                    <input name="data" type="date" required/>
                </div>
                <div>
                    <label>CPF:</label>
                    <input name="cpf" type="number" placeholder="Digite o seu CPF..." required/>
                </div>
                <div>
                    <label>Sexo:</label>
                    <input type="radio" id="masc" name="sexo" value="masc" />
                    <label for="masc">Masculino</label>

                    <input type="radio" id="fem" name="sexo" value="fem" />
                    <label for="fem">Feminino</label>

                    <input type="radio" id="outro" name="sexo" value="outro" />
                    <label for="outro">Outro</label>
                </div>
                <div>
                    <label>Endereço:</label>
                    <input name="endereco" type="text" placeholder="Digite o seu endereço..." />
                </div>
                <div>
                    <label for="status">Status:</label>

                    <select name="status" id="status" required>
                        <option value="">Escolha uma opsão</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>
                <div>
                    <button type='submit' >Cadastrar</button>
                </div>
                <div className={styles.register}>
                    <button type='submit' >Lista Paciente</button>
                    <button type='submit' >Renover Paciente</button>
                </div>
            </form>
            <div className={styles.list}><h1>Lista paciente</h1></div>

            <div className={styles.consult}><h1>Consultar paciente</h1></div>
        </div>
        
    )
    
}

export default Cadastro
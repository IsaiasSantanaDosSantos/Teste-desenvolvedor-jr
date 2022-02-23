import React, {useState} from 'react'

import styles from './Form.module.css'

function Form() {

    const [nome, setNome]=useState()

    const armazenar=(chave, valor) => {
        var name = document.getElementById("name")
        var dataNasc = document.getElementById('nasc')
        var doc = document.getElementById('cpf')
        var endereco = document.getElementById('endereco')


        var dados = JSON.parse(localStorage.getItem('dadosPac'))


        
        var orientSexoal = document.forms['myForm'] ['sexo'];
        if(orientSexoal[0].checked === true ) {
            alert(orientSexoal[0].value)
        }



        if (dados == null){
            localStorage.setItem('dadosPac', '[]')
            dados= []
        }

        var todosDados = {
            nome: name.value,
            Nasc: dataNasc.value,
            cpf: doc.value,
            end: endereco.value
        }

        dados.push(todosDados)

        localStorage.setItem('dadosPac', JSON.stringify(dados))

    }

    const consultar=(chave)=> {
        alert(localStorage.getItem('valor'))
    }

    const apagar=(chave)=> {
        localStorage.removeItem(chave)
    }

    return (
        <div className={styles.init}>
            <form name='myForm'>
                <div>
                    <label>Nome:</label>
                    <input  type="text" id='name' placeholder="Digite o seu nome..." onClick={(e)=>setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Data nascimento:</label>
                    <input id='nasc' name="data" type="date" />
                </div>
                <div>
                    <label>CPF:</label>
                    <input id='cpf' name="cpf" type="text" placeholder="Digite sem pontos..." />
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
                    <input id='endereco' name="endereco" type="text" placeholder="Digite o seu endereço..." />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>

                    <select name="status" id="status" >
                        <option value="">Escolha uma opsão</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>
                <div>
                    <button onClick={()=>armazenar('ls_nome', nome)}>Cadastrar</button>
                </div>
                <div className={styles.register}>
                    <button onClick={()=>consultar('ls_nome',nome)} >Lista Paciente</button>
                    <button onClick={()=>apagar('ls_nome')} >Renover Paciente</button>
                </div>
            </form>
        </div>
    )
};

export default Form
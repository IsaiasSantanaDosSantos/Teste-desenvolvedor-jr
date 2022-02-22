import { Link } from 'react-router-dom'
import  Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/logo-acmi.png'

function Navbar(){

    return (
        <nav className={styles.navbar}>
            <Container >
                <Link to="/" ><img src={logo} alt="Acime Saúde" className={styles.img}/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" >Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadastro" >Cadastro</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato" >Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
};

export default Navbar
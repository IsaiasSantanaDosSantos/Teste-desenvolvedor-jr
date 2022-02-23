import styles from "./Inicio.module.css";
import saude from "../../img/saude.png";

function Inicio() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>Acme Saúde</span>
      </h1>
      <p>Cuidar de você. Esse é o nosso plano!</p>
      <a href="/cadastro">Cadastre-se</a>
      <img src={saude} alt="Saúde" />
    </section>
  );
}

export default Inicio;

import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

import styles from "./Contato.module.css";

function Contato() {
  return (
    <section>
      <div className={styles.home_container}>
        <h1>Contato</h1>
        <p>
          Estou muito feliz por você ter chegada até aqui, isto pode significar
          que você navegou pelo site.
        </p>
        <p>
          Fique a voltade para gerar seu feedback, pois ele é muito importante
          para meu crescimento profissional e pessoal. Vou deixar os meios de
          contato caso queira conhecer mais sobre mim.
        </p>
        <p>Desde de já agradeço a sua visite, obrigado!</p>
      </div>
      <div>
        <ul className={styles.social_list}>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;

import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
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
      <p className={styles.copy_right}>
        <span>Acmi Saúde</span> &copy; 2022 - Desenvolvido por Isaias Santana
        dos Santos
      </p>
    </footer>
  );
}

export default Footer;

import styles from "./Inicio.module.css";
import saude from "../../img/saude.png";
import { useNavigate } from "react-router-dom";
import {Button, createTheme, ThemeProvider} from "@mui/material"

function Inicio() {

  const navigate = useNavigate();


  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
    },
  });

  function goRegister(){
    navigate("/cadastro");
  }


  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>Acmi Saúde</span>
      </h1>
      <p>Cuidar de você. Esse é o nosso plano!</p>
      <ThemeProvider theme={theme} >
        <Button variant="contained"color="primary" onClick={goRegister}>Cadastre-se
        </Button>
      </ThemeProvider>
      <img src={saude} alt="Saúde" />
    </section>
  );
}

export default Inicio;

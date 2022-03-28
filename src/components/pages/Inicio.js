import styles from "./Inicio.module.css";
import saude from "../../img/saude.png";
import { useNavigate } from "react-router-dom";
import {Button, createTheme, ThemeProvider, Grid, Card } from "@mui/material"

function Inicio() {

  const navigate = useNavigate();


  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
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
      <Card variant="underline" item sm={12}>
       <img src={saude} alt="Saúde" />
      </Card>
    </section>
  );
}

export default Inicio;

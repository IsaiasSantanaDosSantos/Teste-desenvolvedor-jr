import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import logo from "../../img/logo-acmi.png";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

import Cadastro from "../pages/Cadastro";

const pages = ["Início", "Cadastro", "Contato"];

const MenuLateral = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down("sm"));

  /*
Este bloco estava entre a tag Tabs:
{pages.map((page, index) => (
  <Tab key={index} label={page} />


 */
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#222" }} position="sticky">
        <Toolbar>
          {isMath ? (
            <>
              <Link to="/">
                <img src={logo} alt="Acmi Saúde"></img>
              </Link>
              <Typography></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <nav className={styles.navbar}>
                <Container>
                  <Link to="/">
                    <img src={logo} alt="Acmi Saúde"></img>
                  </Link>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/contato">Contato</Link>
                    </li>
                  </ul>
                </Container>
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default MenuLateral;

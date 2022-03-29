import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
//import { Route, Routes, useNavigate } from "react-router-dom";

import Cadastro from "../pages/Cadastro";

const pages = ["Início", "Cadastro", "Contato"];

const MenuLateral = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down("sm"));

  //Routes
  function changeToInitialPage() {
    window.location.href = "http://localhost:3000";
  }

  function changeToRegisterPage() {
    window.location.href = "http://localhost:3000/cadastro";
  }
  function changeToContactPage() {
    window.location.href = "http://localhost:3000/contato";
  }

  /*
Este bloco estava entre a tag Tabs:
{pages.map((page, index) => (
  <Tab key={index} label={page} />
))}
 */
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#222" }} position="sticky">
        <Toolbar>
          <Avatar
            sx={{
              marginRight: "auto",
              width: 80,
              height: 40,
              marginTop: 2,
              marginBottom: 2,
            }}
            alt="Acmi Saúde"
            src="/logo-acmi.png"
            variant="square"
          ></Avatar>
          {isMath ? (
            <>
              <Typography></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "#C9301D" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                <Tab label="Início" onClick={changeToInitialPage} />
                <Tab label="Cadastro" onClick={changeToRegisterPage} />
                <Tab label="Contato" onClick={changeToContactPage} />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default MenuLateral;

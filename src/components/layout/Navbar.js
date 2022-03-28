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
import DrawerComp from "./DrawerCompo";

const pages = ["Início", "Cadastro", "Contato"];

const MenuLateral = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down("md"));

  

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#222" }} position="sticky" >
        <Toolbar >
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
              <Typography
                sx={{ fontSize: "2rem", paddingLeft: "10%", color: "#C9301D" }}
              ></Typography>
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
                {pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default MenuLateral;

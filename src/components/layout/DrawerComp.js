import React, { useState } from "react";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./DrawerComp.module.css"
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

//const pages = ["Início", "Cadastro", "Contato"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment sx={{ backgroundColor: "#222"}}>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
              <nav className={styles.navbar}>
                <Container>
                  <ul className={styles.list}>
                    <li className={styles.item}><Link to="/" >Início</Link></li>
                    <li className={styles.item}><Link to="/cadastro" >Cadastro</Link></li>
                    <li className={styles.item}><Link to="/contato" >Contato</Link></li>
                </ul>
                </Container>
              </nav>
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "#fff", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

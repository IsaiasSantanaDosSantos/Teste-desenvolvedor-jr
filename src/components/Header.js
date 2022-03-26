import React from "react";
import Link from "@mui/material/Link";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@mui/material";

const navigationLinks = [
  { name: "Início", href: "" },
  { name: "Casdastro", href: "" },
  { name: "Contato", href: "" },
];

const useStyles = makeStyles((_theme) => ({
  link: {
    marginRight: 20,
  },
  bgDark: {
    background: "#222",
  },
}));

export default function Header() {
  const styles = useStyles();

  //Parei em 4 minutos e 15 segundo do vídio https://www.youtube.com/watch?v=gCEoLdufFLU

  return (
    <AppBar className={styles.bgDark} position="sticky">
      <Toolbar>
        {navigationLinks.map((item) => (
          <Link
            className={styles.link}
            color="#C9301D"
            variant="button"
            underline="none"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}

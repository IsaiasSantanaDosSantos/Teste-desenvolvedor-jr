import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "./components/pages/Inicio";
import Cadastro from "./components/pages/Cadastro";
import Contato from "./components/pages/Contato";
import Container from "./components/layout/Container";
//import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Listar from "./components/pages/Listar";
import Header from "./components/Header";



//O componente "NavBar estava entre o Router e o Container" no mesmo lugar onde coloquei o Header
function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listar" element={<Listar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

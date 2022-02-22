import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Inicio from './components/pages/Inicio'
import Cadastro from './components/pages/Cadastro'
import Contato from './components/pages/Contato'
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/" >Inicio</Link>
        <Link to="/cadastro" >Cadastro</Link>
        <Link to="/contato" >Contato</Link>
      </div>
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;

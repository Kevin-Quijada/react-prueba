import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate} from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary text-center">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <img src="twitter.png" width={70}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Inicio" className="nav-link">Inicio</Link>
            <Link to="/Categorias" className="nav-link">categorias</Link>
            <Link to="/Productos" className="nav-link">Productos</Link>
            <Link to="/Usuarios" className="nav-link">Usuarios</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
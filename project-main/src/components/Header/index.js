import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const linkStyled = {
    color: "aliceblue",
  };
  return (
    <Navbar expand="lg" style={{ background: "#198754" }}>
      <Container fluid>
        <Navbar.Brand href="/" style={linkStyled}>
          IESB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{background: 'aliceblue'}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px", margin: "auto" }} navbarScroll>
            <Nav.Link style={linkStyled} href="/deputados">
              Deputados
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/eventos">
              Eventos
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/frentes">
              Frentes
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/legislaturas">
              Legislaturas
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/orgaos">
              Orgãos
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/partidos">
              Partidos
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/proposicoes">
              Proposicões
            </Nav.Link>
            <Nav.Link style={linkStyled} href="/votacoes">
              Votações
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
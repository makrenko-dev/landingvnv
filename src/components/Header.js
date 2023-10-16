import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../LL.png';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';

const Header =() =>{
	return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
      <DesktopBreakpoint>
        <Navbar.Brand href="#main_p"><img alt='robots' src={logo} width="200" height="50" /></Navbar.Brand>
        </DesktopBreakpoint>
        <PhoneBreakpoint>
        <Navbar.Brand href="#main_p"><img alt='robots' src={logo} width="100" height="25" /></Navbar.Brand>
        </PhoneBreakpoint>
        <Navbar.Toggle className="navbar sticky-top navbar-dark bg-dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#poslygi">Послуги</Nav.Link>
            <Nav.Link className="text-light" href="#portfolio">Портфоліо</Nav.Link>
            <Nav.Link className="text-light" href="#reviews">Відгуки</Nav.Link>
            <Nav.Link className="text-light" href="#contacty">Контакти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
}

export default Header;
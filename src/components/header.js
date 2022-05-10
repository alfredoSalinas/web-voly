import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Header=()=>{

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Voley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Admin" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/adminEquipos' >Equipos</NavDropdown.Item>
                        
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Header
import React from "react";
import { Container, Navbar, NavDropdown, Nav, Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import authService from "../services/auth.service";
import { useSelector, useDispatch } from 'react-redux'
import authAction from "../store/actions/auth.action";
import SideBar from "./sideBar";

const Header=()=>{
    const dispatch = useDispatch()
    const authData = useSelector(state=>state.auth.user)

    const autenticar = ()=>{
        authService.autenticar((res)=>{
            console.log(res.displayName)
            dispatch(authAction.login(res))
        })
    }

    const salir =()=>{
        authService.salir((res)=>{
            console.log(res)
            dispatch(authAction.logout())
            dispatch(authAction.isadmin(false))
        })
    }

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>ASOCIACION DEPARTAMENTAL DE VOLEIBOL DE CHUQUISACA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        { authData ? 
                            <NavDropdown title={authData.displayName} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={salir} >logout</NavDropdown.Item>    
                            </NavDropdown>
                            : <Nav.Link onClick={autenticar} >login</Nav.Link>
                        }
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>
                <Col xs={3}>
                    <SideBar/>
                </Col>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </>
    )
}

export default Header
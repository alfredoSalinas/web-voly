import React from "react";
import { Card, ListGroup, ListGroupItem, Nav, Navbar, NavLink, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import foto from '../asset/img/foto.jpg'

const SideBar=()=>{

    return(
        <Navbar >
            <Card className='card'>
                <Card.Img
                    src={foto}
                    variant='top'
                    className='sig'
                />
                <Card.Body>
                    <Tab.Container defaultActiveKey='/adminJugador'>
                    <ListGroup>
                        <ListGroup.Item action as={Link} to='/adminCategorias'>
                            Categorias
                        </ListGroup.Item>
                        <ListGroup.Item action as={Link} to='/adminJugador'>
                            Jugadores
                        </ListGroup.Item>
                        <ListGroup.Item action as={Link} to='/adminCampeonato'>
                            Campeonatos
                        </ListGroup.Item>
                        <ListGroup.Item action as={Link} to='/adminEquipos'>
                            Equipos
                        </ListGroup.Item>
                    </ListGroup>
                    </Tab.Container>
                </Card.Body>
            </Card>
        </Navbar>
    )
}

export default SideBar
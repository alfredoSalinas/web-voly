import React from "react";
import { Container } from "react-bootstrap";
import TableTeam from "../tables/tableTeam";

const AdminTeam=()=>{

    return(
        <Container>
            <h1>Equipos</h1>
            <TableTeam />
        </Container>
    )
}

export default AdminTeam
import React from "react";
import { Button, Table } from "react-bootstrap";

const TableTeam=(props)=>{

    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Nombre</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {props.teams && props.teams.map((item, i)=>
      <tr key={i}>
      <td>{ item.nombre }</td>
      <td>
        <Button variant="danger" onClick={()=>props.deleteItem(item)} >Delete</Button>
        <Button variant="info" onClick={()=>props.editItem(item)}>edit</Button>  
      </td>
    </tr>
    )}
    
  </tbody>
</Table>
    )
}

export default TableTeam
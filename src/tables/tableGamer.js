import React from "react";
import { Button, Table } from "react-bootstrap";

const TableGamer = (props)=>{

    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Carnet</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Equipo</th>
      <th>Rama</th>
      <th>Categoria</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {props.gamers && props.gamers.map((item, i)=>
      <tr key={i}>
      <td>{item.carnet}</td>
      <td>{ item.nombre }</td>
      <td>{ item.apellidos }</td>
      <td>{ item.club }</td>
      <td>{ item.rama }</td>
      <td>{ item.categoria }</td>
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

export default TableGamer
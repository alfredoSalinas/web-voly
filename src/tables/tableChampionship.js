import React from "react";
import { Button, Table } from "react-bootstrap";

const TableChampionship = (props)=>{

    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Nombre</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {props.championship && props.championship.map((item, i)=>
      <tr key={i}>
      <td>{ item.nombre }</td>
      <td>
        <Button variant="danger" onClick={()=>props.deleteItem(item)} >Delete</Button>
        <Button variant="secondary" onClick={()=>props.editItem(item)}>edit</Button>
        <Button variant="info" onClick={()=>props.selItem(item)}>sel</Button>  
      </td>
    </tr>
    )}
    
  </tbody>
</Table>
    )
}

export default TableChampionship
import React from "react";
import { Button, Table } from "react-bootstrap";

const TableCategories=({categories, deleteItem, editItem})=>{

    return(
        <Table>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map((item, i)=>(
                        <tr key={i}>
                            <td>{item.categoria}</td>
                            <td>
                                <Button onClick={()=>deleteItem(item)} >Delete</Button>
                                <Button onClick={()=>editItem(item)}>edit</Button>  
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </Table>
    )
}

export default TableCategories
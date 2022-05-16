import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalDelete=({show, handleClose, deleteItem, dato})=>{

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Eliminar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Esta seguro de eliminar :</p>
                <p>{dato}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={deleteItem}>Aceptar</Button>
                <Button onClick={handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete
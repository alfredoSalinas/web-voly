import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalError=({show, handleClose, dato})=>{

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Error : no se pudo realizar la operacion :</p>
                <p>{dato}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalError
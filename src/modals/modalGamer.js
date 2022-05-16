import React from "react";
import { Modal } from "react-bootstrap";
import FormGamer from "../forms/formGamer";

const ModalGamer= ({show, handleClose, createGamer, gamer})=>{
    
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGamer gamer={gamer} handleClose={handleClose} createGamer={createGamer} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalGamer
import React from "react";
import { Modal } from "react-bootstrap";
import FormGamer from "../forms/formGamer";

const ModalGamer= ({show, handleClose, createGamer, gamer, categories})=>{
    
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Datos del Jugador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGamer 
                    gamer={gamer} 
                    handleClose={handleClose} 
                    createGamer={createGamer} 
                    categories={categories} 
                />
            </Modal.Body>
        </Modal>
    )
}

export default ModalGamer
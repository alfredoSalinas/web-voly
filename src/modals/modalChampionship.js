import React from "react";
import { Modal } from "react-bootstrap";
import FormChampionship from "../forms/formChampionship";

const ModalChampionship= ({show, handleClose, createChampionship, championship})=>{
    
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormChampionship championship={championship} handleClose={handleClose} createChanpionship={createChampionship} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalChampionship
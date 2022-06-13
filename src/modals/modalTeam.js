import React from "react";
import { Modal } from "react-bootstrap";
import FormGamer from "../forms/formGamer";
import FormTeam from "../forms/formTeam";

const ModalTeam= ({show, handleClose, createTeam, team})=>{
    
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormTeam team={team} handleClose={handleClose} createTeam={createTeam} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalTeam
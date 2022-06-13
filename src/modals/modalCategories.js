import React from "react";
import { Modal } from "react-bootstrap";
import FormCategory from "../forms/formCategory";

const ModalCcategories= ({show, handleClose, createCategory, category})=>{
    
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormCategory category={category} createCategory={createCategory} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalCcategories
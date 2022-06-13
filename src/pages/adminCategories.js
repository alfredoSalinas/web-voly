import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useCategory from "../hooks/useCategory";
import ModalCcategories from "../modals/modalCategories";
import ModalDelete from "../modals/modalDelete";
import ModalError from "../modals/modalError";
import categoryService from "../services/category.service";
import TableCategories from "../tables/tableCategories";

const AdminCategories = ()=>{
    const [show, setShow] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showError, setShowError] = useState(false)
    const [category, setCategory] = useState(null)
    const [categories] = useCategory()

    const handleShow =(item)=>{
        if(item === null){
            setCategory(null)
            setShow(true)
        }else{
            setCategory(item)
            setShow(true)
        }
    }

    const handleClose=()=>{
        setShow(false)
    }

    const handleShowDelete=(item)=>{
        setCategory(item)
        setShowDelete(true)
    }

    const handleCloseDelete=()=>{
        setShowDelete(false)
    }

    const createCategory=(data)=>{
        if(category){
            const dataCategory={
                categoria : data.categoria
            }
            categoryService.updateCategory(category.id, dataCategory).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }else{
            const dataCategory={
            ...data
            }
            categoryService.createCategory(dataCategory).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }
    }

    const deleteItem=()=>{
        categoryService.deleteCategory(category.id).then(()=>{
            console.log('ok')
        }).catch(()=>{
            setShowError(true)
        })
        setShowDelete(false)
    }

    const handleCloseError=()=>{
        setShowError(false)
    }

    return(
        <Container>
            <div className="card">
                <div className="row">
                    <div className="col">
                    <p className="h3">Categorias</p>
                    </div>
                    <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(null)}>Añadir Categoria</button>
                    </div>
                </div>
            </div>
            <TableCategories 
                categories={categories}
                editItem={handleShow}
                deleteItem={handleShowDelete}    
            />
            <ModalCcategories
                show={show}
                handleClose={handleClose}
                category={category}
                createCategory={createCategory}
            />
            <ModalDelete
                show={showDelete} 
                handleClose={handleCloseDelete} 
                dato={category ? category.categoria : ''} 
                deleteItem={deleteItem}
            />
            <ModalError show={showError} handleClose={handleCloseError}/>
        </Container>
    )
}

export default AdminCategories
import React, { useState } from "react";
import useCategory from "../hooks/useCategory";
import useGamer from "../hooks/useGamer";
import ModalDelete from "../modals/modalDelete";
import ModalError from "../modals/modalError";
import ModalGamer from "../modals/modalGamer";
import gamerService from "../services/gamer.service";
import TableGamer from "../tables/tableGamer";

const AdminGamer =()=>{
    const [show, setShow] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showError, setShowError] = useState(false)
    const [gamer, setGamer] = useState(null)
    const [gamers] = useGamer()
    const [categories] = useCategory()

    const handleShow =(item)=>{
        if(item === null){
            setGamer(null)
            setShow(true)
        }else{
            setGamer(item)
            setShow(true)
        }
    }

    const handleClose=()=>{
        setShow(false)
    }

    const createGamer = (data)=>{
        if(gamer){
            const dataGamer={
                carnet: data.carnet,
                nombre: data.nombre,
                apellidos: data.apellidos,
            }
            gamerService.updateGamer(gamer.id, dataGamer).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }else{
            const dataGamer={
                ...data
            }
            console.log(dataGamer)
            /*
            gamerService.createGamer(dataGamer).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
            */
        }
        setShow(false)
    }

    const handleShowDelete=(item)=>{
        setGamer(item)
        setShowDelete(true)
    }

    const handleCloseDelete=()=>{
        setShowDelete(false)
    }

    const deleteItem=()=>{
        gamerService.deleteGamer(gamer.id).then(()=>{
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
        <div className='container mt-3'>
            <div className="card">
                <div className="row">
                    <div className="col">
                    <p className="h3">Jugadores</p>
                    </div>
                    <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(null)}>Añadir Jugador</button>
                    </div>
                </div>
                
            </div>
            <ModalGamer 
                show={show} 
                handleClose={handleClose} 
                createGamer={createGamer}
                gamer={gamer}
            />
            <TableGamer 
                gamers={gamers} 
                deleteItem={handleShowDelete} 
                editItem={handleShow}  />
            <ModalDelete 
                show={showDelete} 
                handleClose={handleCloseDelete} 
                dato={gamer ? gamer.nombre : ''} 
                deleteItem={deleteItem}    
            />
            <ModalError show={showError} handleClose={handleCloseError} />
        </div>
    )
}

export default AdminGamer
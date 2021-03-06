import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
    const [gamers, 
        pagination, 
        prevProducts,
        nextProducts,
        search,
        setSearch,
        setCurrentPage,] = useGamer()
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
            
            gamerService.createGamer(dataGamer).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
            
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
        }).catch((e)=>{
            console.log(e)
            setShowError(true)
        })
        setShowDelete(false)
    }

    const handleCloseError=()=>{
        setShowError(false)
    }

    const onSearchChange =({target})=>{
        setCurrentPage(0)
        setSearch(target.value)
    }


    return(
        <div className='container mt-3'>
            <div className="card">
                <div className="row">
                    <div className="col">
                    <p className="h3">Jugadores</p>
                    </div>
                    <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(null)}>A??adir Jugador</button>
                    </div>
                </div>
                
            </div>
            <ModalGamer 
                show={show} 
                handleClose={handleClose} 
                createGamer={createGamer}
                gamer={gamer}
            />
            <input 
                        type='text'
                        value={search}
                        onChange={onSearchChange}        
                    />
            <TableGamer 
                gamers={pagination()} 
                deleteItem={handleShowDelete} 
                editItem={handleShow}  />
                <Button onClick={prevProducts}>Prev</Button>
                <Button onClick={nextProducts}>Nex</Button>
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
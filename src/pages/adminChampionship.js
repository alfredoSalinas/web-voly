import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Fixture from "../helpers/fixture";
import ModalChampionship from "../modals/modalChampionship";
import ModalDelete from "../modals/modalDelete";
import ModalError from "../modals/modalError";
import championshipsService from "../services/championships.service";
import teamService from "../services/team.service";
import TableChampionship from "../tables/tableChampionship";

const AdminChampionship=()=>{
    const [show, setShow] = useState(false)
    const [championship, setChampionship] = useState(null)
    const [showDelete, setShowDelete] = useState(false)
    const [showError, setShowError] = useState(false)
    const [championships, setChampionships] = useState(null)
    const [teams, setTeams] = useState(null)

    useEffect(()=>{
        championshipsService.getAllChampionships((res)=>{
            const resChampionship = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            console.log(resChampionship)
            setChampionships(resChampionship)
        })
        teamService.getAllTeams((res)=>{
            const resTeams = res.map(t=>{
                return {id: t.id, ...t.data()}
            })
            setTeams(resTeams)
        })
    },[])

    const handleShow =(item)=>{
        if(item === null){
            setChampionship(null)
            setShow(true)
        }else{
            setChampionship(item)
            setShow(true)
        }
    }

    const handleClose=()=>{
        setShow(false)
    }

    const createChampionship = (data)=>{
        if(championship){
            const dataChampionship={
                nombre: data.nombre,
            }
            championshipsService.updateChampionship(championship.id, dataChampionship).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }else{
            const dataChampionship={
                ...data
            }
            championshipsService.createChampionship(dataChampionship).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }
        setShow(false)
    }


    const handleShowDelete=(item)=>{
        setChampionship(item)
        setShowDelete(true)
    }

    const handleCloseDelete=()=>{
        setShowDelete(false)
    }

    const deleteItem=()=>{
        championshipsService.deleteChampionship(championship.id).then(()=>{
            console.log('ok')
        }).catch(()=>{
            setShowError(true)
        })
        setShowDelete(false)
    }

    const handleCloseError=()=>{
        setShowError(false)
    }

    const handleSelect=(item)=>{
        console.log(item)
    }

    return (
        <Container>
            <Fixture teams = {teams} />
            <h1>Hola a todos</h1>
            <div className="card">
                <div className="row">
                    <div className="col">
                    <p className="h3">Campeonatos</p>
                    </div>
                    <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(null)}>Añadir Campeonato</button>
                    </div>
                </div>
            </div>
            <ModalChampionship 
                show={show} 
                handleClose={handleClose} 
                championship={championship} 
                createChampionship={createChampionship}
            />
            <TableChampionship 
                championship={championships}
                deleteItem={handleShowDelete} 
                editItem={handleShow}
                selItem={handleSelect}  
            />
            <ModalDelete 
                show={showDelete} 
                handleClose={handleCloseDelete} 
                dato={championship ? championship.nombre : ''} 
                deleteItem={deleteItem}    
            />
            <ModalError show={showError} handleClose={handleCloseError} />
        </Container>
    )
}

export default AdminChampionship
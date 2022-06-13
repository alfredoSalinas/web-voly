import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useTeam from "../hooks/useTeam";
import ModalDelete from "../modals/modalDelete";
import ModalError from "../modals/modalError";
import ModalTeam from "../modals/modalTeam";
import championshipsService from "../services/championships.service";
import teamService from "../services/team.service";
import TableChampionships from "../tables/tableChampionships";
import TableTeam from "../tables/tableTeam";

const AdminTeam=()=>{
    const [championships, setChampionships] = useState(null)
    const [championship, setChampionship] = useState(null)
    const [show, setShow] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showError, setShowError] = useState(false)
    const [team, setTeam] = useState(null)
    const [teams, setTeams] = useState([])

    useEffect(()=>{
        teamService.getAllTeams((res)=>{
            const resTeams = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            console.log(resTeams)
            setTeams(resTeams)
        })
    },[])

    

    const createTeam = (data)=>{
        if(team){
            const dataTeam={
                nombre: data.nombre,
            }
            teamService.updateTeam(team.id, dataTeam).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }else{
            const dataTeam={
                ...data
            }
            teamService.createTeam(dataTeam).then(()=>{
                console.log('ok')
            }).catch(()=>{
                setShowError(true)
            })
        }
        setShow(false)
    }

    const handleShow =(item)=>{
        if(item === null){
            setTeam(null)
            setShow(true)
        }else{
            setTeam(item)
            setShow(true)
        }
    }

    const handleClose=()=>{
        setShow(false)
    }

    const handleShowDelete=(item)=>{
        setTeam(item)
        setShowDelete(true)
    }

    const handleCloseDelete=()=>{
        setShowDelete(false)
    }

    const deleteItem=()=>{
        teamService.deleteTeam(team.id).then(()=>{
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
                    <p className="h3">Equipos</p>
                    </div>
                    <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(null)}>Añadir Equipo</button>
                    </div>
                </div>
            </div>
            <TableTeam 
                teams={teams} 
                deleteItem={handleShowDelete} 
                editItem={handleShow} 
            />
            <ModalTeam
                show={show}
                handleClose={handleClose}
                createTeam={createTeam}
                team={team}
            />
            <ModalDelete
                show={showDelete} 
                handleClose={handleCloseDelete} 
                dato={team ? team.nombre : ''} 
                deleteItem={deleteItem}
            />
            <ModalError show={showError} handleClose={handleCloseError} />
        </Container>
    )
}

export default AdminTeam
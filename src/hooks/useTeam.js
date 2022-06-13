import React, { useEffect, useState } from "react";
import gamerService from "../services/gamer.service";
import teamService from "../services/team.service";

const useTeam=()=>{
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

    return[
        teams
    ]
}

export default useTeam
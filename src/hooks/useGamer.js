import React, { useEffect, useState } from "react";
import gamerService from "../services/gamer.service";

const useGamer=()=>{
    const [gamers, setGamers] = useState([])

    useEffect(()=>{
        gamerService.getAllGamers((res)=>{
            const resGamers = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            console.log(resGamers)
            setGamers(resGamers)
        })
    },[])

    return[
        gamers
    ]
}

export default useGamer
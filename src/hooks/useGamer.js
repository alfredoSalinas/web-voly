import React, { useEffect, useState } from "react";
import gamerService from "../services/gamer.service";

const useGamer=()=>{
    const [gamers, setGamers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')
    const nPages = 10

    useEffect(()=>{
        gamerService.getAllGamers((res)=>{
            const resGamers = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            console.log(resGamers)
            setGamers(resGamers)
        })
    },[])

    const pagination = ()=>{
        if(search.length === 0){
            return gamers.slice(currentPage, currentPage + nPages)
        }

        const filtered = gamers.filter(el=>el.carnet.includes(search) || el.nombre.includes(search))
        const orderFiltered = filtered.sort(function(a, b){
            if (a.carnet > b.carnet) {
                return 1;
              }
              if (a.carnet < b.carnet) {
                return -1;
              }
              // a must be equal to b
              return 0;
        })
        return orderFiltered.slice(currentPage, currentPage + nPages)
    }
    const nextProducts = ()=>{
        if( currentPage + nPages < gamers.length ){
            setCurrentPage(currentPage + nPages)
        }
        
    }

    const prevProducts = ()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage - nPages)
        }
    }

    return[
        gamers,
        pagination,
        prevProducts,
        nextProducts,
        search,
        setSearch,
        setCurrentPage,
    ]
}

export default useGamer
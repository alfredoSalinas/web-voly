import { useEffect, useState } from "react"
import teamService from "../services/team.service";
import categoryService from "../services/category.service"

const useOptGamer=()=>{
    const [optTeam, setOptTeam] = useState([])
    const [optCategory, setOptCategory] = useState([])
    const optRamas=[
        {label: 'Damas', value: 'Damas'},
        {label: 'Varones', value: 'Varones'}
    ]

    useEffect(()=>{
        categoryService.getAllCategories(res=>{
            const resCategories = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            setOptCategory(resCategories.map(el=>{
                return {label: el.categoria, value: el.categoria}
            }))
        })
        teamService.getAllTeams(res=>{
            const resTeams = res.map(t=>{
                return {id: t.id, ...t.data()}
            })
            setOptTeam(resTeams.map(el=>{
                return {label: el.nombre, value: el.nombre}
            }))
        })
    },[])

    return[
        optTeam,
        optCategory,
        optRamas,
    ]
}

export default useOptGamer
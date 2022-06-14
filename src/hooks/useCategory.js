import React, { useEffect, useState } from "react";
import categoryService from "../services/category.service"

const useCategory=()=>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        categoryService.getAllCategories((res)=>{
            const resCategories = res.map(c=>{
                return {id: c.id, ...c.data()}
            })
            console.log(resCategories)
            setCategories(resCategories)
        })
    },[])

    return[
        categories
    ]
}

export default useCategory
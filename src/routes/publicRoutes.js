import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Header from "../components/header"
import AdminGamer from "../pages/adminGamer"
import AdminTeam from "../pages/adminTeam"
import { useDispatch } from 'react-redux'
import authService from '../services/auth.service'
import authAction from '../store/actions/auth.action'
import adminService from '../services/admin.service'
import AdminChampionship from '../pages/adminChampionship'

export const PublicRoutes=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        authService.onChangeStatus((user)=>{
            if(user?.uid){
                dispatch(authAction.login(user))
                adminService.getAdmin(user, (admin)=>{
                    console.log(admin)
                    dispatch(authAction.isadmin(admin))
                })
            }
        })
    },[])

    return(
        <Routes>
            <Route path="/" element={ <Header /> } >
                <Route path='/adminEquipos' element={ <AdminTeam /> } />
                <Route path='/adminJugador' element={ <AdminGamer /> } />
                <Route path='/adminCampeonato' element={ <AdminChampionship /> } />
            </Route>
        </Routes>
    )
}
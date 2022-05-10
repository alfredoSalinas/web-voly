import { Route, Routes } from "react-router-dom"
import Header from "../components/header"
import AdminTeam from "../pages/adminTeam"

export const PublicRoutes=()=>{

    return(
        <Routes>
            <Route path="/" element={ <Header /> } >
                <Route path='/adminEquipos' element={ <AdminTeam /> } />
            </Route>
        </Routes>
    )
}
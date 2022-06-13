import { Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const ProtectedRoute =({children})=>{
    const admin = useSelector(state=>state.auth.admin)
    if(!admin){
        return <Navigate to='/'/>
    }else{
        return children
    }
}

export default ProtectedRoute
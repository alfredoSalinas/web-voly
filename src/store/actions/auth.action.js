import { LOGIN, LOGOUT, ADMIN } from "../types/auth.types";

const login = (user)=>({
    type : LOGIN,
    payload : user
})

const logout = ()=>({
    type : LOGOUT
})

const isadmin = (admin)=>({
    type : ADMIN,
    payload : admin
})

export default{
    login,
    logout,
    isadmin
}
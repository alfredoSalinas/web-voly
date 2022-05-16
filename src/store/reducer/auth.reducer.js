import { ADMIN, LOGIN, LOGOUT } from "../types/auth.types";

const initialState = {
    admin : false,
    user: null
  };

export default (state=initialState, action)=>{
    switch(action.type) {
        case LOGIN:
            return{
                ...state,
                user : action.payload,
            }

        case LOGOUT:
            return {
                ...state,
                user: null,
            }
        case ADMIN:
            return {
                ...state,
                admin : action.payload,
            } 
        default: return state
    }
}

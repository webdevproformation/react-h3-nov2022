import { CONNEXION , DECONNEXION , IS_LOGGED } from "../action/user-action"

const initialState = {id : 1 , login : "Alain", password : "azerty", isLogged : false  }

export default function userReducer(state = initialState , action){
    switch(action.type){
        case CONNEXION :
            if(action.payload.login === state.login && action.payload.password === state.password ){
                return { ...state , isLogged : true }
            }
            return state
        case IS_LOGGED : 
            return state ;
        case DECONNEXION :
            return {...state , isLogged : false }
        default :
            return state ;
    }

    
}

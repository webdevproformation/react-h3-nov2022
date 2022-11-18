import { CONNEXION , DECONNEXION } from "../action/user-action"

const initialState = {id : 1 , login : "Alain", password : "azerty", isLogged : false  }

export default function userReducer(state = initialState , action){
    switch(action.type){
        case CONNEXION :
            return { ...state , isLogged : true }
        case DECONNEXION :
            return {...state , isLogged : false }
        default :
            return state ;
    }

    
}

import { GET_ALL_COMMENTAIRES } from "../action/commentaire-action"

const initialState = [];

export default function commentaireReducer(state = initialState , action) {
    switch(action.type){
        case GET_ALL_COMMENTAIRES : 
            return action.payload ;
        default :
            return state ;

    }
}

// useReducer 
import { GET_ALL_ARTICLES } from "../action/article-action"

const initialState = [{id : 1 , produit : "PS5" , prix : 900}]

export default function articleReducer(state = initialState , action){
    switch (action.type){
        case GET_ALL_ARTICLES : 
            return action.payload
        default :
         return state ;
    }
 
}
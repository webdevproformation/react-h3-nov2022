import {createContext , useReducer} from "react";
export const AchatContext2 = createContext();

function reductrice(state, action){

    switch(action.type){
        case "ADD_PANIER" : 
            const clonePanier = [...state.panier];
            const existe = clonePanier.find((p) => { return p.id === action.payload.id })
            if(!existe){
                clonePanier.push(action.payload);
                return {...state , panier : clonePanier} ; 
            }
        case "MODIF_PROFIL_VIP" : 
            return {...state , profil : "VIP"}
        default :
         return state 
    }
}

export const AchatProvider2 = (props) => {
    const [panier, dispatch] = useReducer( reductrice , {
        panier : [],
        profil : ""
    });

    return <AchatContext2.Provider value={{panier , dispatch}}>
        {props.children}
    </AchatContext2.Provider>
}
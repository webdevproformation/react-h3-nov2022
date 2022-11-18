export const GET_USER = "GET_USER";
export const CONNEXION = "CONNEXION";
export const DECONNEXION = "DECONNEXION";

//export fonction get

export function connexion(identifiants) {
    return (dispatch) => {
        dispatch({type : CONNEXION , payload : identifiants})
    }
}

export function deconnexion() {
    return {type : DECONNEXION }
}
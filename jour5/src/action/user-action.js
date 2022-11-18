export const GET_USER = "GET_USER";
export const CONNEXION = "CONNEXION";
export const DECONNEXION = "DECONNEXION";
export const IS_LOGGED = "IS_LOGGED";

//export fonction get

export function connexion(identifiants) {
    return (dispatch) => {
        dispatch({type : CONNEXION , payload : identifiants})
    }
}

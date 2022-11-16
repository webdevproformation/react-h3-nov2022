import { useEffect } from "react";
import { useState , createContext } from "react";

export const UserContext = createContext() // store 

// composant qui va emballer l'ensemble de notre application 
// exactement comme <BrowserRouter> de la lib react router dom
export const UserContextProvider = (props) => {
    const [profil , setProfil] = useState({
            login : "Alain" , 
            password : "azerty" , 
            isLogged : false
    });
    useEffect( () => {
        if(localStorage.getItem("logged")){
            setProfil({...profil , isLogged : true})
        }
    } , []);

    const connexion = ({login , password}) => {
        
        if(login === profil.login && password === profil.password){
            setProfil({...profil , isLogged : true})
            localStorage.setItem("logged" , "true")
            return true ;
        }   
        return false ;
        // console.log("erreur lors de l'authentification")
    }

    const deconnexion = () => {
        localStorage.removeItem("logged" )
        setProfil({...profil , isLogged : false})
    }

    return (
        <UserContext.Provider value={{...profil , connexion , deconnexion}}>
            {props.children}
        </UserContext.Provider>
    )
}


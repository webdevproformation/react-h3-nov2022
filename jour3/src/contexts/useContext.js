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

    const connexion = ({login , password}) => {
        
        if(login === profil.login && password === profil.password){
            setProfil({...profil , isLogged : true})
            return true ;
        }   
        return false ;
        // console.log("erreur lors de l'authentification")
    }

    return (
        <UserContext.Provider value={{...profil , connexion}}>
            {props.children}
        </UserContext.Provider>
    )
}


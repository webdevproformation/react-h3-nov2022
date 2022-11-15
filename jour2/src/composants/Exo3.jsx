import { useState } from "react";

const Exo3 = () => {
    const [ user , setUser ] = useState({id : 1 , nom : "Alain" , isLogged : false})
    const logged = () => {
        setUser({...user , isLogged : !user.isLogged})
    }
    return ( 
        <div className="col-3 mt-3">
            <h2>Exo 3</h2>
            <button 
                className="btn btn-outline-secondary"
                onClick={logged}>connexion</button>
            {user.isLogged ? 
                    <p>Bienvenu {user.nom}</p> : 
                    <p>veuillez vous connecter</p>
            }
        </div>
     );
}
 
export default Exo3;
import { useState } from "react";

const State2 = () => {
    // attention dans useState(objet) 
    // et non une primitive string / boolean / number 
    const [compteur , setCompteur] = useState({ id : 1 , nb : 0})
    const augmenter = () => {
        // ça ne fonctionne PAS
        // setCompteur( compteur.nb + 1 ); 
        // il faut 
       // setCompteur({id : 1 , nb : compteur.nb + 1 })
       setCompteur({ ...compteur , nb : compteur.nb + 1 })
    }
    return ( 
        <div className="col-3">
            <h2>useState avec objet</h2>
            <button className="btn btn-outline-dark" onClick={augmenter}> augmenter </button>
            <p>id = {compteur.id}</p>
            <p>nb = {compteur.nb}</p>
        </div>
     );
}
 
export default State2;
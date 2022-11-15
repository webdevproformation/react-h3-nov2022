import { useState } from "react";

const State = () => {
    // const nb = 0 ;
    // le state => variable locale au composant diaponible QUE dans le composant
    // fonction lui donne la valeur par défaut de variable locale => 0
    // retourne un tableau avec 2 valeurs 
    // const [nb , setNb ] => destructuration du tableau
    console.log(useState( 0 )); 
    // nb 
    // fonction qui permet de modifier la valeur 0 
    const [nb , setNb ] = useState( 0 )
    const augmenter = () => {
        //const nb = document.querySelector(".badge").innerHTML 
        //document.querySelector(".badge").innerHTML = parseInt(nb) + 1
        // setNb(nb + 1); 
        // le fait exécuter setNb() => modifier la valeur 0 => 1
        // ET relancer le render / l'affichage de notre composant 
        setNb( precedantNb =>   precedantNb + 1  )
    }

    return ( 
        <div className="col-3 mt-3">
            <button className="btn btn-warning" onClick={augmenter}>Augmenter</button>
            <span className="badge bg-primary m-2">{nb}</span>
            <button className="btn btn-danger" onClick={()=> setNb( nb -1 )}>Diminuer</button>
        </div>
     );
}
 
export default State;
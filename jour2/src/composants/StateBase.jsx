import { useState } from "react";

const StateBase = () => {
    const [valeur , setValeur] = useState( 0 ) ;
    const augmenter = () => {
        setValeur(valeur + 1)
    } 
    const diminuer = () => {
        setValeur(valeur - 1)
    } 
    const zero = () => {
        setValeur(0)
    } 
    return ( 
        <div className="col-3">
            <h2>Découverte de useReducer</h2>
            <button onClick={augmenter}>augmenter</button>
            <button onClick={diminuer} className="mx-2">diminuer</button>
            <button onClick={zero}>zero</button>
            <span>{valeur}</span>
        </div>
     );
}
 
export default StateBase;
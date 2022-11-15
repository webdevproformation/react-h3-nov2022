import { useReducer } from "react";

function fonctionReductrice( state , action){
 switch(action){
    case "AUGMENTER" : 
        return state + 1; // clique sur le bouton augmenter
    case "DIMINUER" :
        return state - 1 ; // clique sur le bouton diminuer
    case "ZERO" :
        return 0 ; // clique sur le bouton zero
    default : 
        return state ; // lors du lancement du composant
 }
}
const StateReduce = () => {
    const [valeur , dispatch ] = useReducer( fonctionReductrice ,  0 ) ;
    return ( 
        <div className="col-3">
            <h2>#2 - useReducer </h2>
            <button onClick={() => dispatch("AUGMENTER")}>augmenter</button>
            <button onClick={() => dispatch("DIMINUER")} className="mx-2">diminuer</button>
            <button onClick={() => dispatch("ZERO")}>zero</button>
            <span>{valeur}</span>
        </div>
     );
}
 
export default StateReduce;
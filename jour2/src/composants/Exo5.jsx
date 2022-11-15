import { useReducer } from "react";

const reduce = (state , action) => {
    switch(action){
        case "AUGMENTER2" :
            return {...state , note : state.note + 2}
        case "DIMINUER3" :
            return {...state , note : state.note - 3}
        case "CHANGERNOM" :
            return {...state , etudiant : state.etudiant === "Alain" ? "Béatrice" : "Alain"}
        default :
            return state ;
    }
}

const Exo5 = () => {

    const [p , dispatch] = useReducer(  reduce, {id : 1 , etudiant : "Alain" , note : 10}  )

    return ( <div className="col-3">
        <h2>Exo 5</h2>
        <button onClick={() => dispatch("AUGMENTER2")}>Augmenter + 2</button>
        <button onClick={() => dispatch("DIMINUER3")}>Diminuer -3</button>
        <button onClick={() => dispatch("CHANGERNOM")}>Changer nom</button>
        <p>nom : {p.etudiant} - note : {p.note}</p>
    </div> );
}
 
export default Exo5;
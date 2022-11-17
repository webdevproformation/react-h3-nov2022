import { useRef} from "react";

const Score = ({score , jeuComplet}) => {
    const nomRef = useRef();

    const isFinished = () =>{
        return jeuComplet.filter( carte => carte.clique ).length === jeuComplet.length
    }

    const enregistrerScore = () => {
        const optionsFetch = {
            method: "POST",
            body: JSON.stringify({
                score , 
                nom : nomRef.current.value, 
                date : Date.now()
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        fetch("http://localhost:3004/scores" , optionsFetch).then(reponse => reponse.json())
        .then(console.log)
        .catch((e) => console.log(e))
    }

    return ( <>
       <p className="text-center">score : {score} 
       {isFinished() && 
        <>
            <input type="text" ref={nomRef}  placeholder="saisir votre nom"/>
            <button onClick={enregistrerScore}>Enregistrer le score</button>
        </>
       }
      </p>
    </> );
}
 
export default Score;
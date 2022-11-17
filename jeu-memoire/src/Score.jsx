import { useRef , useState } from "react";

const Score = ({score , jeuComplet , reset}) => {
    const nomRef = useRef();
    const btnRef = useRef();
    const [restart , setRestart] = useState(false)

    const isFinished = () =>{
        return jeuComplet.filter( carte => carte.clique ).length === jeuComplet.length
    }

    const enregistrerScore = () => {
        if(restart) reset();

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
        .then(() => {
            btnRef.current.innerHTML = "Votre score est enregistré en Bdd - relancer une partie ?";
            setRestart(true);
        })
        .catch((e) => console.log(e))
    }

    return ( <>
       <p className="text-center">score : {score} 
       {isFinished() && 
        <>
            <input type="text" ref={nomRef}  placeholder="saisir votre nom"/>
            <button onClick={enregistrerScore} ref={btnRef}>Enregistrer le score</button>
        </>
       }
      </p>
    </> );
}
 
export default Score;
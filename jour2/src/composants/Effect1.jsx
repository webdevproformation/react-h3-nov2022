import { useEffect , useState } from "react";

const Effect1 = () => {
    const [nb, setNb] = useState(0)
    const [compteur, setCompteur] = useState(0);
    // 
    useEffect(() => {
        console.log("exécution de useEffect"); // exécuté 2 fois 
        // index.js =>  <React.StrictMode> memory leak pendant la phase de dev
        // nb change de valeur et elle passe à 0 
        // puis la fonction comme paramètre de useEffect est exécutée en suite autant de fois que le state est modifié 
        // updated 
    });

    useEffect(() => {
        if(compteur > 0){
            console.log("exécution de useEffect avec condition sur compteur");
            // exécuter QUE si le compteur est modifié 
        }
        // update avec condition 
    }, [compteur] );

    useEffect( () => {
        // exécuter les instructions uniquement lors de l'initialisation du composant
        console.log("composant mounted"); 
    } , []); // lié au fait que <React.StrictMode> memory leak pendant la phase de dev

    useEffect( () => {
        return () => {
           // effectuer des opérations au moment de la suppression du composant du DOM  
        }
    }  , [] );
    
    return ( <div className="col-3">
        <h2>#1 useEffect</h2>
        <button className="btn btn-outline-danger"
                onClick={() => setNb(nb + 1)}>modifier le state</button>
        <button className="btn btn-outline-primary ms-2"
                onClick={() => setCompteur(compteur + 1)}>modifier le compteur</button>
    </div> );
}
 
export default Effect1;
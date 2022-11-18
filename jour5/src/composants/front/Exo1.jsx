import { useState , memo  , useMemo , useEffect} from "react"

const Exo1 = () => {
    const [data, setData] = useState("");
    const [connexion, setConnexion] = useState(false);
    const [valeur , setValeur] = useState([]);

    useEffect( () => {
        if(data !==  ""){
            fetch(`https://jsonplaceholder.typicode.com/${data}`)
                .then(reponse => reponse.json())
                .then(data => setValeur(data))
        }
    }  , [data])

    const traitement = () => {
        console.log("optimization")
        return connexion ? "bienvenu dans le back office" : "veuillez vous connecter"
    }

    // éviter les traitements lourds
    const rendu = useMemo(() => traitement() , [connexion] )

    const affichage = () => {
        console.log("requête API")
        return JSON.stringify(valeur , null , " ")
    }

    const affichageMemo = useMemo( () => affichage() , [data])
    return ( 
        <div>
            <h2>Exo 1</h2>
            <select onChange={(e) => {setData(e.target.value)} } className="me-3" >
                <option value="">selectionner une valeur</option>
                <option value="users">users</option>
                <option value="posts">posts</option>
            </select>
            <button onClick={() => setConnexion(!connexion)}>connexion</button>
            <p>{ rendu }</p>
            { valeur.length === 0 ? <p>loading</p> : <pre>{ affichageMemo }</pre>}
            
        </div>
     );
}
 
export default memo(Exo1);
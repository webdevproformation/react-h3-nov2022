import {useState , useMemo} from "react"

const Accueil = () => {
    const [recherche, setRecherche] = useState("");
    const [mode, setMode] = useState(false);
    const data = [
        { id : 1 , titre : "Article 1" , contenu : "lorem ipsum"},
        { id : 2 , titre : "Article 2" , contenu : "lorem ipsum"},
        { id : 3 , titre : "Article 3" , contenu : "lorem ipsum"},
    ]

    const genererArticles = () => {
        console.log("la fonction genererArticles générer article est exécutée")
        return data.map( (a) => {
            return <article key={a.id}>
                <h2>{a.titre} - {mode ? "jour" : "nuit"}</h2>
                <p>{ a.contenu  }</p>
            </article>
        }  )
    }

    const genererArticlesMemo = useMemo( () => genererArticles() , [mode] );
    // phrase d'optimisation du code 
    // memoization => exécuter des traitements / fonctions 
    // au préalable enregistre le résultat si rerendu du composant => retour le resultat mémorisé si la condition n'est pas modifiée
    return ( 
        <>
            <div className="my-3">
                <input type="text" placeholder="rechercher" className="me-2" onChange={(e) => setRecherche(e.target.value)} value={recherche}/>
                <label htmlFor="mode">
                    <input type="checkbox" id="mode" checked={mode} onChange={e => setMode(e.target.checked)}/> mode
                </label>
            </div>
            {  genererArticlesMemo }
        </>
     );
}
 
export default Accueil;
import { useEffect , useState } from "react";

const Accueil = () => {
    const [cocktails, setCocktails] = useState([])
    const [recherche, setRecherche] = useState("vodka")
    useEffect( () => {
        async function getCocktails() {
            const reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+recherche);
            const {drinks} = await reponse.json();
            setCocktails(drinks);
        }
        getCocktails();

    } , [recherche]);

    return ( <div>
        <div className="row my-3">
            <input type="text" 
                placeholder="rechercher" 
                className="w-25" 
                onChange={e => setRecherche(e.target.value)} />
        </div>
        <div className="row">
            { (cocktails && cocktails.length > 0) ? 
                 cocktails.map( cocktail  => {
                    return <div className="col-3" key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt="" className="img-fluid" />
                        <p>{cocktail.strInstructions}</p>
                    </div>
                }  )  : 
                <p>aucun cocktail disponible</p>
            }
        </div>
    </div> );
}
 
export default Accueil;
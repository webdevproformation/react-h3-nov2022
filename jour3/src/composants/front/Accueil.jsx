import { useEffect , useState } from "react";
import Pagination from "../Pagination";

const Accueil = () => {
    const [cocktails, setCocktails] = useState([])
    const [recherche, setRecherche] = useState(() => {
        return "vodka"
    })
    const [pageEncours , setPageEnCours] = useState(1)
    useEffect( () => {
        async function getCocktails() {
            const reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+recherche);
           /*  const data  = await reponse.json(); // { drinks : [] }
            setCocktails(data.drinks); */
           // console.log(await reponse.json());
            const { drinks }  = await reponse.json(); // { drinks : [] }
            setCocktails(drinks);
        }
        getCocktails();

    } , [recherche]);

    return ( <div>
        <div className="row my-3">
            <input type="text" 
                placeholder="rechercher" 
                className="w-25" 
                onChange={e => {
                    setRecherche(e.target.value)
                    setPageEnCours(1)
                }} />
        </div>
        <hr />
        <div className="row">
            <h2>nombre de cocktails trouvés : {(cocktails && cocktails.length > 0) ? cocktails.length : 0 } </h2>
        </div>
        <hr />
        <div className="d-flex justify-content-center my-3">
            <Pagination total={(cocktails && cocktails.length > 0) ? cocktails.length : 0} max="8" pageEncours={pageEncours} setPageEnCours={setPageEnCours} />
        </div>
        <div className="row">
            { (cocktails && cocktails.length > 0) ? 
                 cocktails.slice((pageEncours - 1 ) * 8 , 8 * pageEncours ).map( cocktail  => {
                    return <div className="col-3" key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt="" className="img-fluid" />
                        <p>{cocktail.strInstructions}</p>
                    </div>
                }  )  : 
                <p>aucun cocktail disponible</p>
            }
        </div>
        <div className="d-flex justify-content-center my-3">
            <Pagination total={(cocktails && cocktails.length > 0) ? cocktails.length : 0} max="8" pageEncours={pageEncours} setPageEnCours={setPageEnCours} />
        </div>
    </div> );
}
 
export default Accueil;
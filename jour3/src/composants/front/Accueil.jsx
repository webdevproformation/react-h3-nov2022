import { useEffect , useState , useContext } from "react";
import Pagination from "../Pagination";
import { AchatContext2 } from "../../contexts/useAchat2"

const Accueil = () => {
    const { dispatch } = useContext( AchatContext2 );
    const [cocktails, setCocktails] = useState([])
    const [recherche, setRecherche] = useState(() => {
        return "vodka"
    })
    const [pageEncours , setPageEnCours] = useState(1);
    const max = 4 ;

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
            <Pagination total={(cocktails && cocktails.length > 0) ? cocktails.length : 0} max={max} pageEncours={pageEncours} setPageEnCours={setPageEnCours} />
        </div>
        <div className="row">
            { (cocktails && cocktails.length > 0) ? 
                 cocktails.slice((pageEncours - 1 ) * max , max * pageEncours ).map( cocktail  => {
                    return <div className="col-3" key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt="" className="img-fluid" />
                        <p>{cocktail.strInstructions}</p>
                        <button className="btn btn-sm btn-dark" onClick={ () => {
                            dispatch({type : "ADD_PANIER" , payload : {
                                id : cocktail.idDrink ,
                                nom : cocktail.strDrink ,
                                img : cocktail.strDrinkThumb
                            }})
                        }}>ajouter au panier</button>
                    </div>
                }  )  : 
                <p>aucun cocktail disponible</p>
            }
        </div>
        <div className="d-flex justify-content-center my-3">
            <Pagination total={(cocktails && cocktails.length > 0) ? cocktails.length : 0} max={max} pageEncours={pageEncours} setPageEnCours={setPageEnCours} />
        </div>
    </div> );
}
 
export default Accueil;
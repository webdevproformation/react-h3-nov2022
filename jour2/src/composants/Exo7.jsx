import { useReducer , useEffect } from "react";

function reduce(state , action){

    switch(action.type){
        case "CHARGE" :
            return {...state , ...action.payload}
            // envoyer les données vers le state ! 
        default :
            return state ;
    }
}

// useState versus useReducer 
// même chose 
// simple           complexe 
//  => valeur est simple et peu d'action 
// useReducer => valeur complexe objet et / ou plein d'action 

// sommaire demain :
// formulaire 
// useContext 
// reuseStatedux

const Exo7 = () => {
    const [article, dispatch] = useReducer( reduce , {});
    useEffect( () =>{
        /* fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then( reponse => reponse.json() )
        .then( data => setArticle(data))
        .catch((e) => console.log(e)) */
        async function getArticle1(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await response.json();
                dispatch({ type : "CHARGE" , payload : data }  );
                // envoie une action ET données celle récupérer depuis la requête AJAX 
                
            }catch(e){
                console.log(e);
            }  
        } 
        getArticle1(); 
    } , [])
    return ( <div className="col-3">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
    </div> );
}
 
export default Exo7;


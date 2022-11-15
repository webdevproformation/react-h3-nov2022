import { useState , useEffect } from "react";

const Exo6 = () => {
    const [article, setArticle] = useState({});
    useEffect( () =>{
        /* fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then( reponse => reponse.json() )
        .then( data => setArticle(data))
        .catch((e) => console.log(e)) */
        async function getArticle1(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await response.json();
                setArticle(data)
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
 
export default Exo6;


import { useEffect, useState } from "react";


const Effect2 = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        // au moment du chargement du composant 
        // appeler une API => requête AJAX 
        // remplir la variable data 
        // json placeholder
        // 
        // fetch("")
        const req = new XMLHttpRequest();
        req.open("GET", "https://jsonplaceholder.typicode.com/posts");
        req.send();
        req.onload = function(){
            console.log(req.responseText); 
        }
        req.onerror = function(e){
            console.log(e)
        }

       fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setData(data))
        .catch((e) => console.log(e))

        async function requete (){
            try{
                const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await reponse.json();
                return data ; 
            }catch(e){
                console.log(e)
            }
        }
        requete()

    } , [] )

    return ( <div className="col-12">
        <h2>#2 useEffect avec API </h2>
        {JSON.stringify(data , null, " ")}
        {/* équivalent d'un var_dump() en PHP */}
    </div> );
}
 
export default Effect2;
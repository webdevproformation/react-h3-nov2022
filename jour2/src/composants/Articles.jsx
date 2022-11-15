import { useState } from "react";
import Article from "./Article";

const Articles = () => {
    const [articles , setArticles] = useState([
        {id : 1 , titre : "Article 1" , like : 1},
        {id : 2 , titre : "Article 2" , like : 0},
        {id : 3 , titre : "Article 3" , like : 10}
    ]);

    const augmenter = (data) => {
        const cloneArticle = [...articles] ; // clone 
        const articleAModifier = cloneArticle.find( (article ) => { return article.id === data.id} )
        const index = cloneArticle.indexOf(articleAModifier);
        cloneArticle[index].like++ ;
        setArticles(cloneArticle)
        // console.log(data)
    }

    return ( 
    <div className="col-3">
        {articles.map((article , index) => {
            return <Article key={index} data={article} augmenter={augmenter}/>
            {/** possible de passer des valeurs MAIS aussi des fonctions */}
            {/** data={article} => attribut de la balise */}
            {/** data={article} => props du composant */}
        })}
    </div> );
}
 
export default Articles;
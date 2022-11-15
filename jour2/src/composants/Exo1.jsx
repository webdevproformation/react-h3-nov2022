const Exo1 = () => {
    const articles = [
        {id : 1 , titre :"article 1" , publie : true },
        {id : 2 , titre :"article 2" , publie : false },
        {id : 3 , titre :"article 3" , publie : false },
        {id : 4 , titre :"article 4" , publie : true }
    ]

    return ( 
        <div className="col-3">
            {/** il faut obligatoirement avoir 1 balise parent comme racine du composant */}
            <h1>Exo 1</h1>
            <ul>
                {articles.map(article  => {
                    return (article.publie) && 
                            <li key={article.id}>{article.titre}</li>
                })}
            </ul>
        </div>
     );
}
 
export default Exo1;
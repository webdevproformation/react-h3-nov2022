const Exo2 = () => {
    const articles = [
        {id : 1 , titre :"article 1" , publie : true },
        {id : 2 , titre :"article 2" , publie : false },
        {id : 3 , titre :"article 3" , publie : false },
        {id : 4 , titre :"article 4" , publie : true }
    ];
    const action = ({titre}) => console.log(titre)
    return ( 
        <div className="col-3">
            <h1>Exo 2</h1>
            <ul>
                {articles.map((article) => {
                    return (!article.publie) && 
                        <li 
                        onMouseEnter={() => action(article)} 
                        key={article.id}>{article.titre}</li>
                })}
            </ul>
        </div>
     );
}
 
export default Exo2;
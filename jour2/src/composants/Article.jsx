/* const Article = (props) => {
    console.log(props.data.titre)
    return ( 
        <p>{props.data.titre} 
            <button className="btn btn-success btn-sm">{props.data.like}</button>
        </p>
    );
} */
// envoyer des informations (props) transmises depuis le parent (Articles)
const Article = ({data , augmenter}) => {
    return ( 
        <p>{data.titre} 
            <button className="btn btn-success btn-sm"
                    onClick={() => augmenter(data)}>{data.like}</button>
        {/* exécuter une fonction dans l'enfant qui a été déclarée dans le parent */}
        </p>
    );
}
 
export default Article;
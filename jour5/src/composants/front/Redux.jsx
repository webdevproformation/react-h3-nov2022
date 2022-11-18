import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react"
import { getArticles } from "../../action/article-action";

const Redux = () => {

    /* const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getArticles())
    } , []) */


    const articles = useSelector( (store) =>   {
        console.log(store)
        return store.articleReducer 
    }  )
    return ( 
        <>
            <h1>Découverte de Redux</h1>
            <pre>{JSON.stringify( articles, null , " "  )}</pre>
        </>
     );
}
 
export default Redux;
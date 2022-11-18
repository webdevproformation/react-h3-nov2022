import { useSelector } from "react-redux";

const Redux = () => {

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
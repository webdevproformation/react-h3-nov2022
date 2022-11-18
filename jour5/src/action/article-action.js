

export const GET_ALL_ARTICLES = "GET_ALL_ARTICLES"

export const getArticles = () => {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
                    .then( reponse => reponse.json() )
                    .then(data => dispatch({ type : GET_ALL_ARTICLES , payload : data  }))
    }
}
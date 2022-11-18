export const GET_ALL_COMMENTAIRES = "GET_ALL_COMMENTAIRES";

export const getAllCommentaires = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(reponse => reponse.json())
            .then(data => dispatch({type : GET_ALL_COMMENTAIRES , payload : data})  )
    }
}
import { combineReducers } from "redux";

import articleReducer from "./article-reducer"
import userReducer from "./user-reducer"
import commentaireReducer from "./commentaire-reducer";


export default combineReducers({
    articleReducer,
    userReducer,
    commentaireReducer
})
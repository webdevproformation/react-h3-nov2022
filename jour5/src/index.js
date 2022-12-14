import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router  } from "react-router-dom"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducer from "./reducer/index"
import {getArticles} from "./action/article-action"
import { getAllCommentaires } from './action/commentaire-action';


const store = createStore(
  reducer , composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getArticles());
store.dispatch(getAllCommentaires())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

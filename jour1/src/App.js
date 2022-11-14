/* import logo from './logo.svg';*/
import './App.css'; 
import React from "react"; 
import { Premier } from "./composants/Premier"

function App() {
  return (
    <div className="App">
      <Premier />
      {/*
       * commentaire en jsx 
       * binaire 0 ou 1 
       * binaire => logiciel (logiciel / une application)
       * logiciel visual 
       * logiciel en ligne de commande 
       * npm start => react-scripts start 
       * cd 
       * pwd 
       * mv => logiciel en ligne de commande = bin
       */}
       {/**
        * balise ouvrante balise fermante
        */}
        <h1>Obligatoire</h1>
        {/** saut de ligne  il faut obligatoirement fermer la balise orpheline avec un / sur la balise ouvrante*/}
         <br />
         <img src="https://via.placeholder.com/400x200" alt="" className="border-10" /> 
         <input type="text" />
          <></>
          {/* fragment react une zone */}
          <React.Fragment></React.Fragment>
          <br />
          <label htmlFor="email">email</label> 
          <input type="email" id="email" />
    </div>
  );
}

export default App;

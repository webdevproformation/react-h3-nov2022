import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function initGame(){
  const cartes = [
    { img : "🚲" , clique: false},
    { img : "🚀", clique: false} , 
    { img : "⛱️", clique: false} ,
    { img  : "🚕", clique: false}
  ];
  const jeuComplet = [...cartes , ...cartes]
                      // tri aléatoire d'un tableau
                      .sort(() => Math.random() - 0.5 ) 
                      // ajouter que chaque élément du tableau un id unique
                      .map( (carte) => ({ img : carte.img , id : Math.random()  }) )
  return jeuComplet ;
}

function App() {

  const [jeuComplet, setJeuComplet ] = useState([]);

  useEffect( () => {
    setJeuComplet(initGame())
  }, [])

  // créer un tableau qui contient 2 fois chaque image et que les images soient classées dans un ordre aléatoire

  
  const handleClick = (carte) => {
    const cloneJeu = [...jeuComplet];
    const AModifier = jeuComplet.find((c) => c.id === carte.id)
    const index = cloneJeu.indexOf(AModifier);
    cloneJeu[index].clique = true
    setJeuComplet(cloneJeu);
  }
                
  return (
    <div className="App">
        { jeuComplet.map( (carte) => <div className={carte.clique ? "carte actif" : "carte"} key={carte.id} onClick={ () => handleClick( carte ) }>
            <article>
              <div className="carte-recto">
                
              </div>
             <div className="carte-verso">{carte.img}</div>
            </article> 
          </div>
         ) }
    </div>
  );
}

export default App;

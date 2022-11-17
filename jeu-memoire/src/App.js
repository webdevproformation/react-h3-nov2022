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
  const [choix1 , setChoix1] = useState(null)
  const [choix2 , setChoix2] = useState(null)

  useEffect( () => {
    setJeuComplet(initGame())
  }, [])

  useEffect( () =>{
    if(choix1 && choix2){
      // vérification => comparaison entre l'image choix1 et du choix2
      // si c'est différent => retourne les cartes 
      if( choix1.img !== choix2.img ){
        const cloneJeu = [...jeuComplet];
        const AModifier1 = jeuComplet.find((c) => c.id === choix1.id)
        const index1 = cloneJeu.indexOf(AModifier1);
        const AModifier2 = jeuComplet.find((c) => c.id === choix2.id)
        const index2 = cloneJeu.indexOf(AModifier2);
        setTimeout( () => {
          cloneJeu[index1].clique = false
          cloneJeu[index2].clique = false
          setJeuComplet(cloneJeu);
        } ,  1000)
      }
      setChoix1(null);
      setChoix2(null);
    }
  } , [choix1, choix2]) 

  // créer un tableau qui contient 2 fois chaque image et que les images soient classées dans un ordre aléatoire
  
  const handleClick = (carte) => {
    if( choix1 === null ) {
      setChoix1(carte)
    }  else{
      setChoix2(carte);
    }
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

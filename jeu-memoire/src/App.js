import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Carte from "./Carte";

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
  const [score , setScore] = useState(0);
  const [disable , setDisable] = useState(false);

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
      setTimeout( () => {
        setDisable(false);
        setScore( score + 1 )
        setChoix1(null);
        setChoix2(null);
      } , 1000)
      
    }
  } , [choix1, choix2]) 

  // créer un tableau qui contient 2 fois chaque image et que les images soient classées dans un ordre aléatoire
  
  const handleClick = (carte) => {
    if( choix1 === null ) {
      setChoix1(carte)
    }  else{
      setChoix2(carte);
      setDisable(true); 
    }
    const cloneJeu = [...jeuComplet];
    const AModifier = jeuComplet.find((c) => c.id === carte.id)
    const index = cloneJeu.indexOf(AModifier);
    cloneJeu[index].clique = true
    setJeuComplet(cloneJeu);
  }

  const reset = () => {
    setScore(0)
    setChoix1(null);
    setChoix2(null);
    setJeuComplet(initGame())
    setDisable(false); 
  }
                
  return (
    <>
    <h1 className="text-center">Jeu de mémoire</h1>  
    <p className="text-center">règles du jeu : réaliser des pairs avec l'ensemble des cartes ci dessous</p>
    <div className="text-center">
      <button onClick={reset}>relancer une partie</button>
    </div>  
    <div className="App">
        { jeuComplet.map( (carte) => <Carte  handleClick={handleClick} carte={carte} key={carte.id} disable={disable}/>
         ) }
    </div>
      <p className="text-center">score : {score} </p>
    </>
  );
}

export default App;

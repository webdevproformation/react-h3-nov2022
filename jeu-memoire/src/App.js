import { useEffect , useReducer } from "react";
import "./App.css";
import Carte from "./Carte";
import Score from "./Score";
import {initGame , useInit} from "./hooks/useInit"

function reductrice(state, action){

  switch(action.type){
    case "CHOIX1" :
      return {...state , choix1 : action.payload }
    case "CHOIX2" :
        return {...state , choix2 : action.payload , disable : true }
    case "SCORE+1" :
      return {...state , choix1 : null , choix2 : null , disable : false , score : state.score + 1 }
    case "RESET" :
      return { choix1 : null , choix2 : null , score : 0 , disable : false }
    default :
      return state
  }
}

function App() {

  const [jeuComplet , setJeuComplet ] = useInit();

  const [state , dispatch] = useReducer ( reductrice , { choix1 : null , choix2 : null , score : 0 , disable : false } )

  useEffect( () =>{
    const {choix1, choix2} = state
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
          setJeuComplet(() => cloneJeu);
          
        } ,  1000)
      } 
      setTimeout( () => {
        dispatch({type : "SCORE+1" })
      } , 1000)
    }
  } ) 

  // créer un tableau qui contient 2 fois chaque image et que les images soient classées dans un ordre aléatoire
  
  const handleClick = (carte) => {
    const { choix1 } = state
    if( choix1 === null ) {
      dispatch({type : "CHOIX1" , payload : carte})
    }  else{
      dispatch({type : "CHOIX2" , payload : carte})
    }
    const cloneJeu = [...jeuComplet];
    const AModifier = jeuComplet.find((c) => c.id === carte.id)
    const index = cloneJeu.indexOf(AModifier);
    cloneJeu[index].clique = true
    setJeuComplet(cloneJeu);
  }

  const reset = () => {
    setJeuComplet(initGame())
    dispatch({type : "RESET"})
  }
                
  return (
    <>
    <h1 className="text-center">Jeu de mémoire</h1>  
    <p className="text-center">règles du jeu : réaliser des pairs avec l'ensemble des cartes ci dessous</p>
    <div className="text-center">
      <button onClick={reset}>relancer une partie</button>
    </div>  
    <div className="App">
        { jeuComplet.map( (carte) => <Carte  handleClick={handleClick} carte={carte} key={carte.id} disable={state.disable}/>
         ) }
    </div>
      <Score score={state.score} jeuComplet={jeuComplet} reset={reset} />
    </>
  );
}

export default App;

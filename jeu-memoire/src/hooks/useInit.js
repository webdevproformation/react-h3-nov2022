import {useEffect , useState} from "react"

export function initGame(){
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


export const useInit = () =>{
    const [jeuComplet, setJeuComplet ] = useState([]);
    useEffect( () => {
        setJeuComplet(initGame())
      }, [])
      return [jeuComplet , setJeuComplet] ;
}
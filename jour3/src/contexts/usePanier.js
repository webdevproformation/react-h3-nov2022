// ce fichier contient des informations que l'on va vouloir partager à l'ensemble des composants de notre application 

// fonction permet de créer un store ($_SESSION )
import { createContext , useState } from "react";

export const PanierContext = createContext() ;

// store => l'endroit où on stocke des données / fonctions 
// retourne un composant qui va mettre à disposition la $_SESSION
export const PanierProvider = (props) => {

    const [panier, setPanier] = useState([
        {id : 1 , prix : 10 },
        {id : 2 , prix : 30 }
    ])

    const ajouterPanier = (produit) => {
        const clonePanier = [...panier]
        clonePanier.push(produit);
        setPanier(clonePanier);
        console.log("je viens d'ajouter un produit au panier")
    } 

    const removeProduit = () => {

    }
    const store = { panier , ajouterPanier , removeProduit  }
    console.log(store) // { panier : [{id : 1 , prix : 10 },{id : 2 , prix : 30 }] , ajouterPanier : function(){} }

    // value = [{id : 1 , prix : 10 },{id : 2 , prix : 30 }]

    return <PanierContext.Provider value={store}>
        {props.children} {/**car <App/> est un enfant de <PanierProvider> */}
    </PanierContext.Provider>

}

// provider => composant qui va mettre à disposition les informations


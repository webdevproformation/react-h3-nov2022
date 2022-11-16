import {createContext , useState} from "react";
export const AchatContext = createContext();
export const AchatProvider = (props) => {
    const [panier, setPanier] = useState([]);

    const addPanier = (produit) => {
        const clonePanier = [...panier];
        const existe = clonePanier.find((p) => { return p.id === produit.id })
        if(!existe){
            clonePanier.push(produit);
            console.log(clonePanier);
             setPanier(clonePanier)
        }
    }
    return <AchatContext.Provider value={{panier , addPanier}}>
        {props.children}
    </AchatContext.Provider>
}
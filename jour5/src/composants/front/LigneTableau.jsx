import { memo } from "react"

const LigneTableau = ({ produit }) => {
    console.log("render Enfant")
    return ( 
        <tr>
            <td>{produit.id}</td>
            <td>{produit.nom}</td>
        </tr>
     );
}
 
export default memo(LigneTableau);
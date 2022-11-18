import { useState } from "react";
import LigneTableau from "./LigneTableau";

const Optimization = ({produits}) => {
    const [filtre, setFiltre] = useState("")

    return ( 
        <>
            <h2>Optimization</h2>
            <input type="text" placeholder="filtrage" className="my-3" onChange={e => setFiltre(e.target.value)}  value={filtre}/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>#nom</th>
                    </tr>
                </thead>
                <tbody>
                    { produits.filter((p) => {
                        return p.nom.toLowerCase().includes(filtre.toLowerCase())
                    }).map( p => {
                        return <LigneTableau  key={p.id} produit={p} />
                    } ) }
                    
                </tbody>
            </table>
        </>
     );
}
 
export default Optimization;
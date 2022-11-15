import { useState } from "react";
import Etudiant from "./Etudiant";

const Etudiants = () => {
    const [etudiants , setEtudiants] = useState([
        {id : 1 , nom : "Alain" , actif : true},
        {id : 2 , nom : "Béatrice" , actif : false},
    ])
    const activation = (id) => {
        const cloneEtudiant = [...etudiants];
        const etudiantAModifier = cloneEtudiant.find(etudiant => etudiant.id === id)
        const index = cloneEtudiant.indexOf(etudiantAModifier);
        cloneEtudiant[index].actif = !cloneEtudiant[index].actif ;
        setEtudiants(cloneEtudiant);
    }
    return (
        <div className="col-3">
            <h2>Exo 4</h2>
            {etudiants.map((etudiants) => {
                return <Etudiant key={etudiants.id} data={etudiants} activation={activation}/>
            })}
        </div>

      );
}
 
export default Etudiants;
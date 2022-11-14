// sfc 
const BoucleCondition = () => {
    const etudiants = [
        {id : 1 , nom : "Alain" , isStagiaire : true},
        {id : 2 , nom : "Benoit" , isStagiaire : false},
        {id : 3 , nom : "Céline" , isStagiaire : true},
        {id : 4 , nom : "Damien" , isStagiaire : true}
    ]
    /**
     * <ul>
     *  <li>Alain</li>
     *  <li>Benoit</li>
     *  <li>Céline</li>
     *  <li>Damien</li>
     * </ul>
     */
    return ( <div>
        <h1>première manière</h1>
        <ul>
            <li>{ etudiants[0].nom }</li>
            <li>{ etudiants[1].nom }</li>
            <li>{ etudiants[2].nom }</li>
            <li>{ etudiants[3].nom }</li>
        </ul>
        <h1>deuxième manière</h1>
        <ul>
            { etudiants.map(function(etudiant , index){
                return <li key={index}>{ etudiant.nom }</li>
            }) }
        </ul>
        <h1>troisieme manière</h1>
        <ul>
            { etudiants.map( (etudiant , index) => <li key={index}>{ etudiant.nom }</li> ) }
        </ul>
        <h2>condition</h2>
        {/*
        if 
        si l'étudiant est stagiaire => afficher son nom 
        */}
        { (etudiants[0].isStagiaire) && <p>{ etudiants[0].nom }</p> }
        { (etudiants[1].isStagiaire) && <p>{ etudiants[1].nom }</p> }
        {/** if else
         * condition ? .... : ..... 
         */}
        { (etudiants[1].isStagiaire) ? 
            <p>{ etudiants[1].nom } est stagiaire </p> : 
            <p>{ etudiants[1].nom } n'est pas stagiaire</p> }

        <h2>boucle et condition </h2>
        {etudiants.map( (etudiant , index) => etudiant.isStagiaire ? 
                <li key={index}>{etudiant.nom}</li> :
                null
         )}
    </div> );
}
 
export default BoucleCondition;
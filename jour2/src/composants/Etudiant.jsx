const Etudiant = ({data, activation}) => {
    return ( <p>
        nom {data.nom} 
            <button className="btn btn-info mx-2"
                    onClick={( ) => activation(data.id)}>
            {data.actif ? "désactiver" : "activer" }
        </button>
        {data.actif ? <span className="fs-3">🏝️</span> : <span className="fs-3">🌋</span>}
    </p> );
}
 
export default Etudiant;
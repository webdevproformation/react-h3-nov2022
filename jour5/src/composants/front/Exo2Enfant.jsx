import {memo} from "react"
const Exo2Enfant = ({show}) => {
    console.log("Exo2Enfant");
    return ( 
        <>
            {show && <p>un peu de texte</p>}
        </>
    );
}
 
export default memo(Exo2Enfant);
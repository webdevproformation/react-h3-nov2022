import { useState } from "react";
import Exo2Enfant from "./Exo2Enfant";

const Exo2 = () => {
    const [show , setShow] = useState(false)
    return ( 
        <>  
            <h2>Exo2</h2>
            <button onClick={() => setShow(!show)}>Show</button>
            { <Exo2Enfant show={show} />}
        </>
     );
}
 
export default Exo2;
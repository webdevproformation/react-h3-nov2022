import img from "./logo.jpg";

import "../style.css"; // style dans le dossier src/

const Logo = () => {
    return ( 
        <div className="col-3">
            <h2>ajouter image</h2>
            <p className="details">premier manière : dans le dossier public</p>
            <img src="assets/logo.jpg" alt="" className="img-fluid"/>
            <p className="important">deuxième manière : dans le dossier src/composants</p>
            <img src={img} alt="" className="img-fluid"/>
        </div>
     );
}
 
export default Logo;
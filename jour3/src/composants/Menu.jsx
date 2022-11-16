import { Link , NavLink } from "react-router-dom"

const Menu = () => {
    return ( 
        <div className="bg-dark">
            <nav className="container navbar navbar-expand navbar-dark">
                <span className="navbar-brand"> Jour3 </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/a-propos" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>
                            A propos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;

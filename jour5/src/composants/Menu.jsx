import {NavLink} from "react-router-dom" ;
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const user = useSelector( (store) => store.userReducer );
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        dispatch({type : "DECONNEXION" })
        navigate("/login");
    }

    return ( 
        <div className="bg-warning">
               <nav className="navbar navbar-expand navbar-light container">
                    <span className="navbar-brand">Jour 5</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/optimisation" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Optimisation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/redux" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Redux</NavLink>
                        </li>
                        { !user.isLogged ? <li className="nav-item">
                            <NavLink to="/login" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
                        </li> : <li className="nav-item">
                            <NavLink to="#" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={ logout }>Logout</NavLink>
                        </li> }
                    </ul>
               </nav> 
        </div>
     );
}
 
export default Menu;
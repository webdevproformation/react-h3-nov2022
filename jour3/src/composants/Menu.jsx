const Menu = () => {
    return ( 
        <div className="bg-dark">
            <nav className="container navbar navbar-expand navbar-dark">
                <span className="navbar-brand"> Jour3 </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="/a-propos" className="nav-link">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;

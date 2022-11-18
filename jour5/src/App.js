import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./composants/Menu";
import {Routes , Route} from "react-router-dom"
import Accueil from "./composants/front/Accueil";
import Optimization from "./composants/front/Optimization";

function App() {
  const produits = [
    {id : 1 , nom : "Playstation"},
    {id : 2 , nom : "Nintendo DS"},
    {id : 3 , nom : "Nintendo Gameboy"},
    {id : 4 , nom : "Ordinateur"},
]
  return (
    <div className="App">
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/optimisation" element={<Optimization produits={produits} />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;

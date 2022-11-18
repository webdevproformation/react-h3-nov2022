import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./composants/Menu";
import {Routes , Route} from "react-router-dom"
import Accueil from "./composants/front/Accueil";

function App() {
  return (
    <div className="App">
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/optimisation" element={<h1>optimisation</h1>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;

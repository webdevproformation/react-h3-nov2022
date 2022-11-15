import Exo1 from "./composants/Exo1";
import Menu from "./composants/Menu";
import Event from "./composants/Event";
import Exo2 from "./composants/Exo2";
import State from "./composants/State";
import State2 from "./composants/State2";
import Exo3 from "./composants/Exo3";
import Articles from "./composants/Articles";
import Etudiants from "./composants/Etudiants";
import StateBase from "./composants/StateBase";
import StateReduce from "./composants/StateReduce";

function App() {
  return (
    <div className="App">
        <Menu />
        <main className="container">
          <div className="row">
            <Exo1 />
            <Event />
            <Exo2 />
            <State />
            <State2 />
            <Exo3 />
            <Articles />
            <Etudiants />
            <StateBase />
            <StateReduce />
          </div>
        </main> 
        
    </div>
  );
}

export default App;

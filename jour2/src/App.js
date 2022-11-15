import Exo1 from "./composants/Exo1";
import Menu from "./composants/Menu";
import Event from "./composants/Event";
import Exo2 from "./composants/Exo2";
import State from "./composants/State";

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
          </div>
        </main> 
        
    </div>
  );
}

export default App;

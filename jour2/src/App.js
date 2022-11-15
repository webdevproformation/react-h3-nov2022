import Exo1 from "./composants/Exo1";
import Menu from "./composants/Menu";
import Event from "./composants/Event";

function App() {
  return (
    <div className="App">
        <Menu />
        <main className="container">
          <div className="row">
            <Exo1 />
            <Event />
          </div>
        </main> 
        
    </div>
  );
}

export default App;

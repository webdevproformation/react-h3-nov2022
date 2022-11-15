import Exo1 from "./composants/Exo1";
import Menu from "./composants/Menu";

function App() {
  return (
    <div className="App">
        <Menu />
        <main className="container">
          <div className="row">
            <Exo1 />
          </div>
        </main> 
        
    </div>
  );
}

export default App;

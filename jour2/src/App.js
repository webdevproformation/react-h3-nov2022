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
import Exo5 from "./composants/Exo5";
import Effect1 from "./composants/Effect1";
import Effect2 from "./composants/Effect2";
import Exo6 from "./composants/Exo6";
import Exo7 from "./composants/Exo7";
import Logo from "./composants/Logo";



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
            <Exo5 />
            <Effect1 />
            {/* <Effect2 /> */}
            <Exo6 />
            <Exo7/>
            <Logo />
          </div>
        </main> 
        
    </div>
  );
}

export default App;

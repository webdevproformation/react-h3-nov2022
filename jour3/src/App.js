// npm i bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./composants/Menu";
import { Routes , Route  } from "react-router-dom"
import Accueil from "./composants/front/Accueil";
import Login from "./composants/front/Login";
import Contact from "./composants/front/Contact";

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/test" element={<h1>une page de test</h1>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<h1> A propos</h1>} />
          <Route path="/login" element={<Login />} />
          {/**
           * <Route path="/article" element={<h1>les articles</h1>} />
            <Route path="/article/:id" element={<h1>un article</h1>} />
           */}
          <Route path="/article">
            <Route index  element={<h1>les articles</h1>} />
            <Route path=":id"  element={<h1>voir un article</h1>} />
            <Route path="edit"  element={<h1>modifier article</h1>} />
            <Route path="create"  element={<h1>créer article</h1>} />
          </Route>
          {/** route à mettre en dernier pour la gestion des urls introuvables */}
          <Route path="*" element={<h1>erreur 404</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

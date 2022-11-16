import { useRef , useContext } from "react"
import { UserContext  } from "../../contexts/useContext";
import { useNavigate} from "react-router-dom"
// useRef => équivalent d'un document.querySelector()
export const Login = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const { connexion } = useContext( UserContext );
    const navigate = useNavigate()

    const soumissionForm = e => {
        e.preventDefault() ; // bloquer le chargement automatique de la page suite à la soumission 
        /* const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries())
        console.log(data); */
        // équivalent 
        const data = {
            login : loginRef.current.value,
            password : passwordRef.current.value,
        } 

        if(connexion(data)){
            navigate("/dashboard") // redirection programmatique 
        }
    }
    return (
        <div>
            <h1 className="text-center my-5">Accéder au back office</h1>
            <div className="d-flex justify-content-center">
                <form className="w-50" onSubmit={soumissionForm}>
                    <input type="text" name="login" className="form-control" placeholder="saisir votre login" ref={loginRef} />
                    <input type="password" name="password" className="form-control my-3" placeholder="saisir votre password" ref={passwordRef} />
                    <div className="text-center">
                        <input type="submit" className="btn btn-outline-dark" value="connexion" />
                    </div>
                </form>
            </div>
            
        </div>
      );
}
 
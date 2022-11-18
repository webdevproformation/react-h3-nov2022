import { useRef } from "react"
import { useDispatch } from "react-redux"
import { connexion } from "../../action/user-action"

const Login = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const soumission = (e) => {
        e.preventDefault()
        const credientials = {
            login : loginRef.current.value ,
            password : passwordRef.current.value
        }
        dispatch(connexion(credientials))

       //  console.log(credientials);
    }
    return ( 
        <>
            <h1>Connexion</h1>
            <form onSubmit={ soumission  }>
                <input type="text" ref={loginRef}/>
                <input type="password" ref={passwordRef} className="mx-2"/>
                <input type="submit" className="btn btn-primary" />
            </form>
        </>
     );
}
 
export default Login;
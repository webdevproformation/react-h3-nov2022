import { useRef , useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { connexion } from "../../action/user-action"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"

const Login = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer )
    const navigate = useNavigate()

    const soumission = (e) => {
        e.preventDefault();
        const credientials = {
            login : loginRef.current.value ,
            password : passwordRef.current.value
        }
        dispatch(connexion(credientials))
        navigate("/dashbord")
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
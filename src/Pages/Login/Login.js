import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CurrentUser, FatchData } from "../../Redux/Action";

const Login = () => {

    const data = useSelector((state) => state.u_Data.userData)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [isHome, setIsHome] = useState(false)

    useEffect(() => {
        dispatch(FatchData())
    }, [])

    // useEffect(() => {
    //     !!isHome && navigate("/home")
    // }, [isHome])

    if(localStorage.getItem("currentUser")){
        navigate("/home")
    }
    
    const loginHandler = () => {
        if (email === "") {
            setError("Please type Email")
        }
        else if (password === "") {
            setError("Please type Password")
        }
        else if ((data.some((el) => { return el.email === email && el.password === password }))) {
            dispatch(CurrentUser(email, setIsHome))
        }
        else {
            setError("Please type Currect Information")
        }
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="container">
                <div className="insideContainer">
                    <br />
                    <h1> Login Page </h1>
                    <hr></hr>
                    <input type="email" value={email} name="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                    <input type="password" value={password} name="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    <p className="error">{error}</p>
                    <button className="button" disabled={!email || !password} onClick={loginHandler}>Submit</button>
                    <button className="register" onClick={() => navigate("/signup")}> Register Your self </button>
                </div>
                <br />
            </div>
        </>
    )
}

export default Login;
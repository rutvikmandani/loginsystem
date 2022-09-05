import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FatchData, StoreData } from "../../Redux/Action";

const oldData = () => {
    let data = localStorage.getItem("user")
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

const Signup = () => {
    const [userData, setUserData] = useState(oldData())

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    let allUserData = null

    const storeHandler = () => {
        if(firstname === ""){
            setError("Please type Username")
        }
        else if (lastname === "") {
            setError("Please type Lastname")
        }
        else if (email === "") {
            setError("Please type Email")
        }
        else if (password === "") {
            setError("Please type Password")
        }
        else {
            setError("")
            allUserData = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            }
            if (userData?.some((el) => { return el.email === email })) {
                setError("This email are in use so Signup with another EmailID")
            }
            else {
                setUserData([...userData, allUserData])
                setFirstname("")
                setLastName("")
                setEmail("")
                setPassword("")
            }
        }
    }

    useEffect(() => {
        dispatch(FatchData())
    }, [])

    useEffect(() => {
        dispatch(StoreData(userData))
    }, [userData])

    return (
        <>
            <div className="container">
                <br />
                <h1>Signup</h1>
                <hr></hr>
                <input type="text" name="firstname" value={firstname} placeholder="Enter Your Name" onChange={(e) => setFirstname(e.target.value)} autoComplete="off" />
                <input type="text" name="lastname" value={lastname} placeholder="Enter Your LastName" onChange={(e) => setLastName(e.target.value)} autoComplete="off" />
                <input type="email" name="email" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                <input type="password" name="password" value={password} placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                <p className="error">{error}</p>
                <button className="button" disabled={!email || !password || !firstname || !lastname} onClick={storeHandler}>Save Data</button>
                <button className="register" onClick={() => navigate("/")}> Signin Your Self </button>
                <br />
            </div>
        </>
    )
}

export default Signup;
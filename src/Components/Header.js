import React, { useEffect, useState } from "react";
import Ciphernutz from '../Ciphernutz.svg'
import { useNavigate } from "react-router-dom";
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { FatchData, RemoveUser } from "../Redux/Action";

const Header = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLogout, setIsLogout] = useState(false);
    return(
        <>
            <header className="header">
                <img src={Ciphernutz} alt="Ciphernutz" className="home" onClick={() => navigate("/home")} />
                <h1 className="home" onClick={() => navigate("/about")}>About</h1>
                <h1 className="home" onClick={() => navigate("/contact-us")}>Contact Us</h1>
                <h1 className="home" onClick={() => navigate("/map-view")}>Map View</h1>
            </header>
        </>
    )
}

export default Header
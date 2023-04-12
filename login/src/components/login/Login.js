import React, { useState, useContext } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import { UserContext } from "../../UserContext";
const Login = () => {
 
    const navigate = useNavigate();
    const { updateUser, user } = useContext(UserContext);

    // const [ user, setUser ] = useState({
    //     SmartId: "",
    //     password: ""
    // })

    const handleIDChange = e => {
        updateUser('smartId', e.target.value);
        }

    const handlePasswordChange = e => {
            updateUser('password', e.target.value);
        }


    const login = () => {
        console.log("user",user)
      axios
        .post("http://localhost:9002/login", user)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => console.log(error));
        navigate("/Student_homepage");
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo2} alt="Logo" />
                </div>
                <div className="bv_logo">
                    <img src={bv_logo} alt="Logo"/>
                </div>
            </div>
            <div className="containerLP">
            <div className="containerlogin">
                <div className="login"> 
                    {console.log(user,"user")}
                    <h1>Login</h1>
                    <input type="text" name="SmartId" value={user.SmartId} onChange={handleIDChange} placeholder="Enter your Smart Id" required />
                    <input type="password" name="password" value={user.password} onChange={handlePasswordChange}  placeholder="Enter your Password" required />
                    <div className="button" onClick={ login }>Login</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login

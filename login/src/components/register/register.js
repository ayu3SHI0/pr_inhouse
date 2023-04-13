import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';



const Register = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name: "",
        SmartId: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, SmartId, password, reEnterPassword } = user
        if( name && SmartId && password && password === reEnterPassword){
             axios.post("http://localhost:9002/register", user)
             .then( res => console.log(res))
             navigate("/login")
        }else{
            alert("invalid!");
            return false;
        }
    }

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
        <div className="register"> 
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
        <input type="text"  name="SmartId" value={user.SmartId} placeholder="enter your SmartId" onChange={ handleChange } required></input>
        <input type="password" name="password" value={user.password}  placeholder="enter your password" onChange={ handleChange } required></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password" onChange={ handleChange } required></input>
        <div className="button" onClick={register}>Register</div>
       </div>
       </div>
       </div>
       </>
    )
}

export default Register




// // import React, { useState } from "react"
// // import "./register.css"
// // import axios from "axios"
// // import { useNavigate } from "react-router-dom"
// // import '../../headerForAll.css';
// // import logo2 from '../images/logo2.png';
// // import bv_logo from '../images/bv_logo.jpg';



// // const Register = () => {
// //     const navigate = useNavigate();
// //     const [ user, setUser ] = useState({
// //         name: "",
// //         SmartId: "",
// //         password: "",
// //         reEnterPassword: ""
// //     })

// //     const handleChange = e => {
// //         const { name,value } = e.target
// //         setUser({
// //             ...user,
// //             [name]: value
// //         })
// //     }

// //     const register = () => {
// //         const { name, SmartId, password, reEnterPassword } = user
// //         if( name && SmartId && password && password === reEnterPassword){
// //              axios.post("http://localhost:9002/register", user)
// //              .then((res) => {
//         //   alert(res.data.message);
//         //   if (res.data.message === "Successfully Registered") {
//         //     setAuth(true);
//         //     navigate("/login");
//         //   } else {
//         //     alert("Enter Correct Details");
//         //   }
//         // }
// //         }else{
// //             alert("invalid!");
// //             return false;
// //         }
// //     }

// //     return (
// //         <>
// //         <div className="header">
// //         <div className="logo">
// //                 <img src={logo2} alt="Logo" />
// //         </div>
// //         <div className="bv_logo">
// //           <img src={bv_logo} alt="Logo"/>
// //         </div>
// //       </div>
// //       <div className="containerLP">
// //       <div className="containerlogin">
// //         <div className="register"> 
// //         {console.log("user",user)}
// //         <h1>Register</h1>
// //         <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
// //         <input type="text"  name="SmartId" value={user.SmartId} placeholder="enter your SmartId" onChange={ handleChange } required></input>
// //         <input type="password" name="password" value={user.password}  placeholder="enter your password" onChange={ handleChange } required></input>
// //         <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password" onChange={ handleChange } required></input>
// //         <div className="button" onClick={register}>Register</div>
// //        </div>
// //        </div>
// //        </div>
// //        </>
// //     )
// // }

// // export default Register


// import React, { useState } from "react";
// import "./register.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import logo2 from '../images/logo2.png';
// import bv_logo from '../images/bv_logo.jpg';

// const Register = () => {
//   const navigate = useNavigate();
//   const [isAuth, setAuth] = useState(false)
//   const [user, setUser] = useState({
//     name: "",
//     SmartId: "",
//     password: "",
//     reEnterPassword: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     SmartId: "",
//     password: "",
//     reEnterPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });

//     switch (name) {
//       case "name":
//         validateName();
//         break;
//       case "SmartId":
//         validateSmartId();
//         break;
//       case "password":
//         validatePassword();
//         break;
//       case "reEnterPassword":
//         validateReEnterPassword();
//         break;
//       default:
//         break;
//     }
//   };

//   const validateName = () => {
//     if (!user.name.trim()) {
//       setErrors((prevState) => ({
//         ...prevState,
//         name: "Name is required",
//       }));
//     } else if (!/^[a-zA-Z ]+$/.test(user.name)) {
//       setErrors((prevState) => ({
//         ...prevState,
//         name: "Name can only contain letters and spaces",
//       }));
//     } else {
//       setErrors((prevState) => ({
//         ...prevState,
//         name: "",
//       }));
//     }
//   };

//   const validateSmartId = () => {
//     if (!user.SmartId) {
//         setErrors((prevState) => ({
//         ...prevState,
//         SmartId: "User ID is required",
//         }));
//         } else if (!/^[a-zA-Z]{5}[0-9]{5}$/.test(user.SmartId)) {
//         setErrors((prevState) => ({
//         ...prevState,
//         SmartId: "User ID can only contain 5 letters and 5 numbers",
//         }));
//         } else {
//         setErrors((prevState) => ({
//         ...prevState,
//         SmartId: "",
//         }));
//         }
//   };

//   const validatePassword = () => {
//     if (!user.password) {
//         setErrors((prevState) => ({
//         ...prevState,
//         password: "password is required",
//         }));
//         } else if (!/^[A-Za-z0-9]{5,8}$/.test(user.password)) {
//         setErrors((prevState) => ({
//         ...prevState,
//         password: "password must contain numbers & letters",
//         }));
//         } else {
//         setErrors((prevState) => ({
//         ...prevState,
//         password: "",
//         }));
//         }
//   };

//   const validateReEnterPassword = () => {
//     if (user.password !== user.reEnterPassword) {
//       setErrors((prevState) => ({
//         ...prevState,
//         reEnterPassword: "Passwords do not match",
//       }));
//     } else {
//       setErrors((prevState) => ({
//         ...prevState,
//         reEnterPassword: "",
//       }));
//     }
//   };
 
//   const register = () => {
//     const { name, SmartId, password, reEnterPassword } = user
//     if( name && SmartId && password && password === reEnterPassword){
//          axios.post("http://localhost:9002/register", user)
//          .then( res => console.log(res))
//          navigate("/login")
//     }else{
//         alert("invalid!");
//         return false;
//     }
// //  else {
// //       setErrors((prevState) => ({
// //         ...prevState,
// //         name: !name ? "Name is required" : "",
// //         SmartId: !SmartId ? "SmartId is required" : "",
// //         password: !password ? "Password is required" : "",
// //         reEnterPassword:
// //           password !== reEnterPassword ? "Passwords do not match" : "",
// //       }));
// //     }
//   };
//   // console.log("render register")


//     return (
//         <>
//         <div className="header">
//         <div className="logo">
//                 <img src={logo2} alt="Logo" />
//         </div>
//         <div className="bv_logo">
//           <img src={bv_logo} alt="Logo"/>
//         </div>
//       </div>
//       <div className="containerLP">
//       <div className="containerlogin">
//       <div className="register"> 
//         {console.log("user",user)}
//         <h1>Register</h1>
//         <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
//         {errors.name && <span className="error">{errors.name}</span>}
//         <input type="text"  name="SmartId" value={user.SmartId} placeholder="enter your SmartId" onChange={ handleChange } required></input>
//         {errors.SmartId && <span className="error">{errors.SmartId}</span>}
//         <input type="password" name="password" value={user.password}  placeholder="enter your password" onChange={ handleChange } required></input>
//         {errors.password && <span className="error">{errors.password}</span>}
//         <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password" onChange={ handleChange } required></input>
//         {errors.reEnterPassword && <span className="error">{errors.reEnterPassword}</span>}
//         <div className="button" onClick={register}>Register</div>
//       </div>
//        </div>
//        </div>
//        </>
//     )
// }

// export default Register
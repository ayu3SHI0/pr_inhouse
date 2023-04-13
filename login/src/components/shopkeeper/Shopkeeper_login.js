// import React, { useState } from "react";
// import "../login/login.css";
// import axios from "axios";
// import '../main/main_login.css';
// import '../../headerForAll.css';
// import logo2 from '../images/logo2.png';
// import bv_logo from '../images/bv_logo.jpg';
// import { useNavigate } from "react-router-dom";


// const Shopkeeper_Login = () => {
//   const navigate = useNavigate();

//   const [shop, setShop] = useState({
//     ShopId: "",
//     Spassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setShop({
//       ...shop,
//       [name]: value,
//     });
//   };

//   const Shop_login = () => {
//     axios
//       .post("http://localhost:9002/Shopkeeper_login",shop)
//       .then((res) => {
//         alert(res.data.message);
//         // navigate to home page
//         navigate("/Mainshopkeeper")
//       })
      
//       .catch((error) => console.log(error));
//   };

//   return (
//      <>
//       <div>
//          <div className="header">
//             <div className="logo">
//               <img src={logo2} alt="Logo" />
//             </div>
//             <div className="bv_logo">
//               <img src={bv_logo} alt="Logo"/>
//             </div>
//           </div>
//           <div className="containerLP">
//           <div className="containerlogin">
//     <div className="login">
//       {console.log(shop)}
//       <h1>Login</h1>
//       <input
//         type="text"
//         name="ShopId"
//         value={shop.ShopId}
//         onChange={handleChange}
//         placeholder="Enter Shop Id" required
//       />
//       <input
//         type="password"
//         name="Spassword"
//         value={shop.Spassword}
//         onChange={handleChange}
//         placeholder="Enter your Password" required
//       />
//       <div className="button" onClick={Shop_login}>
//         Login
//       </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }
// export default Shopkeeper_Login;


import React, { useState } from "react";
import "../login/login.css";
import axios from "axios";
import '../main/main_login.css';
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import { useNavigate } from "react-router-dom";


const Shopkeeper_Login = () => {
  const navigate = useNavigate();
  const [isAuth, setAuth]= useState(false)

  const [shop, setShop] = useState({
    ShopId: "",
    Spassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShop({
      ...shop,
      [name]: value,
    });
  };

  const Shop_login = () => {
    axios
      .post("http://localhost:9002/Shopkeeper_login", shop)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "login successfull") {
          setAuth(true);
          navigate("/Mainshopkeeper");
        } else {
          alert("Enter Correct Details");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    
     <>
      <div>
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
      {console.log(shop)}
      <h1>Login</h1>
      <form className="formLogin" onSubmit={Shop_login}>
      <input
        type="text"
        name="ShopId"
        value={shop.ShopId}
        onChange={handleChange}
        placeholder="Enter Shop Id" required
      />
      <input
        type="password"
        name="Spassword"
        value={shop.Spassword}
        onChange={handleChange}
        placeholder="Enter your Password" required
      />
      <input type="submit" className="button" value="Login" />
      </form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
export default Shopkeeper_Login;




// import React, { useState } from "react"
// import "./login.css"
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';
// import '../../headerForAll.css';

// import logo2 from '../images/logo2.png';
// import bv_logo from '../images/bv_logo.jpg';

// const Login = () => {
 
//     const navigate = useNavigate();

//     const [ user, setShop ] = useState({
//         ShopId: "",
//         password: ""
//     })

//     const handleChange = e => {
//         const { name,value } = e.target
//         setShop({
//             ...shop,
//             [name]: value
//         })
//     }
//     const login = () => {
//       axios
//         .post("http://localhost:9002/login", shop)
//         .then((res) => {
//           alert(res.data.message);
//           navigate("/Student_homepage");

//         })
//         .catch((error) => console.log(error));
//     };




//     return (
//         <>
//             <div className="header">
//                 <div className="logo">
//                     <img src={logo2} alt="Logo" />
//                 </div>
//                 <div className="bv_logo">
//                     <img src={bv_logo} alt="Logo"/>
//                 </div>
//             </div>
//             <div className="containerLP">
//                 <div className="login"> 
//                     {console.log(shop)}
//                     <h1>Login</h1>
//                     <input type="text" name="ShoptId" value={shop.ShopId} onChange={handleChange} placeholder="Enter your Smart Id" required />
//                     <input type="password" name="password" value={shop.password} onChange={handleChange}  placeholder="Enter your Password" required />
//                     <div className="button" onClick={ login }>Login</div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login
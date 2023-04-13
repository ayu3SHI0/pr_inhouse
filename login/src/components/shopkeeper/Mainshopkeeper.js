import React from "react";
import { useNavigate } from "react-router-dom";
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import "./shopkeeperHomePage.css";
import axios from "axios";

function Mainshopkeeper() {
const navigate = useNavigate();
const handleClick1 = () => navigate("/Shopkeeper_homepage");
const handleClick2 = () => navigate("/Pharmacy_homepage");
const handleClick3 = () => navigate("/Stationery_homepage");
return (
<>

{/* HEADER */}
<div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

<div className="container1">
<table className="t1">
<tr>
<td>
<button className="B1" onClick={handleClick1}>General </button>
</td>
<td>
<button className="B1" onClick={handleClick2}>Pharmacy </button>
</td>
<td>
<button className="B1" onClick={handleClick3}>Stationery </button>
</td>
</tr>

</table>
</div>
</>
);
}
export default Mainshopkeeper;
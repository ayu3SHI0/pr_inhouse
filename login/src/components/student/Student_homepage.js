import React from 'react';
import './student_homepage.css';
import '../../headerForAll.css';
import bv_logo from '../images/bv_logo.jpg'
import logo2 from '../images/logo2.png';
import stationerylogo from '../images/stationerylogo.gif';
import pharmacylogo from '../images/pharmacylogo.gif';
import generalstorelogo from '../images/generalstorelogo.gif';
import { useNavigate } from 'react-router-dom';

function Student_homepage() {

  const Navigate = useNavigate();
  const gotoProfile = () => Navigate('/MyProfile');
  const gotoOrders = () => Navigate('/MyOrders') ;
  const gotoBG = () => Navigate('');
  
  const gotoBGGeneral = () => Navigate('/Generalbill');
  const gotoBGPharmacy = () => Navigate('/Pharmacybill');
  const gotoBGStationery = () => Navigate('/Stationerybill');




  return (
    <div className='fullBody-chp'>

      {/* HEADER */}
       <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

      {/* nav bar for the links  */}
        <div className="navbar-chp">

          <button onClick={gotoProfile}>My Profile</button>
          <button onClick={gotoOrders}>My Orders</button>
        </div>

      {/* CONTAINER FRO THE REST  */}
      <div className="container-chp">

          {/* DIV FOR THE GIFS */}
          <div className="sections-chp">

            <button className="section-gif-chp" onClick={gotoBGPharmacy}> <img src={pharmacylogo} height="300" width="300" /> </button>
            <button className="section-gif-chp" onClick={gotoBGGeneral}> <img src={generalstorelogo} height="300" width="300" /> </button> 
            <button className="section-gif-chp" onClick={gotoBGStationery}> <img src={stationerylogo} height="300" width="300" /> </button>

          </div>

          {/* TIMING WALA DIV */}
          <div className="timings-chp">
            <h2>Delivery Timings:</h2>
            <p>Wednesday - Monday: 5pm - 8pm</p>
            <p>Tuesday: 10am - 1pm , 4pm-8pm</p>
          </div>

      </div>

    </div>
  )
}

export default Student_homepage;
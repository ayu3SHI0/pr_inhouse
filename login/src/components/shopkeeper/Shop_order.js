
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import './table.css';

function Shop_order() {
    const navigate = useNavigate();

const handleClickView = () => navigate("/View_order");

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
        <div className='tableWrap'>
            <div>
            <br></br><br></br><br></br>
                
                <table className="td1" border="2" align="center">
                <th>Student ID </th>  
                <th>Student Name </th>
                <th>Date </th>
                <th>Time </th>
                <th>ACTION </th>

                {/* {datas.map((current) => ( */}
                    
                    <tr >
                        <td>btbti20100</td>
                        <td>shreya</td>
                        <td>31/3/23</td>
                        <td>19:53</td>
                        <td>
                            <button className="edit" onClick={handleClickView}>View</button>                            
                        </td>
                    </tr> <tr >
                        <td>btbti20107</td>
                        <td>aastha</td>
                        <td>23/3/23</td>
                        <td>14:24</td>
                        <td>
                            <button className="edit" onClick={handleClickView}>View</button>                            
                        </td>
                    </tr>
                    <tr >
                        <td>btbti25360</td>
                        <td>devanshi</td>
                        <td>25/3/23</td>
                        <td>11:24</td>
                        <td>
                            <button className="edit" onClick={handleClickView}>View</button>                            
                        </td>
                    </tr>
                    <tr >
                        <td>btbti25100</td>
                        <td>deepanshi</td>
                        <td>25/3/23</td>
                        <td>17:40</td>
                        <td>
                            <button className="edit" onClick={handleClickView}>View</button>                            
                        </td>
                    </tr>
                    </table>
            
            </div>
        </div>
        </>
    )
}

export default Shop_order;


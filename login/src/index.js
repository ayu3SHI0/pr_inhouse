import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student_homepage from './components/student/Student_homepage'
import Login from "./components/login/Login"
 import Register from "./components/register/register"
 import Main_login from './components/main/main_login';
 import Generalbill from './components/billgenerator/Generalbill'; 
 import Stationerybill from './components/billgenerator/Stationerybill'
 import Pharmacybill from './components/billgenerator/Pharmacybill';
 import Shopkeeper_homepage from './components/shopkeeper/Shopkeeper_homepage';
 import Shopkeeper_login from './components/shopkeeper/Shopkeeper_login';
 import Table from './components/shopkeeper/Table';


import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main_login />}/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/Student_homepage' element={<Student_homepage />}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Generalbill' element={<Generalbill/>}/>
      <Route path='/Stationerybill' element={<Stationerybill/>}/>
      <Route path='/Pharmacybill' element={<Pharmacybill/>}/>
      <Route path='/Shopkeeper_homepage' element={<Shopkeeper_homepage/>}/>
      <Route path='/Shopkeeper_login' element={<Shopkeeper_login/>}/>
      <Route path='/Table' element={<Table/>}/>
    </Routes>
  </BrowserRouter>
);
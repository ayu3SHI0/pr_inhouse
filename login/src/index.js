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
 import View_order from './components/shopkeeper/View_order';
 import Shop_order from './components/shopkeeper/Shop_order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './UserContext'
import Mainshopkeeper from './components/shopkeeper/Mainshopkeeper';
import Pharmacy_homepage from './components/shopkeeper/Pharmacy_homepage';
import Stationery_homepage from './components/shopkeeper/Stationery_homepage';
import Table_pharmacy from './components/shopkeeper/Table_pharmacy';
import Table_stationery from './components/shopkeeper/Table_stationery';


// export const UserContext = createContext({
//   smartID: '',
//   password: '',
//   updateSmartID: () => {},
//   updatePassword: () => {},
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UserContext.Provider value={{ smartID, password,updateSmartID, updatePassword}}>
  <UserContextProvider>
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
      <Route path='/View_order' element={<View_order/>}/>
      <Route path='/Shop_order' element={<Shop_order/>}/>
      <Route path='/Mainshopkeeper' element={<Mainshopkeeper/>}/>
      <Route path='/Pharmacy_homepage' element={<Pharmacy_homepage/>}/>
      <Route path='/Stationery_homepage' element={<Stationery_homepage/>}/>
      <Route path='/Table_pharmacy' element={<Table_pharmacy/>}/>
      <Route path='/Table_stationery' element={<Table_stationery/>}/>
    </Routes>
  </BrowserRouter>
  </UserContextProvider>
  );
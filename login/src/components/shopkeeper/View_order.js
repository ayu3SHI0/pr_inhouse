// import logo2 from "./logo2.png";
// import bv_logo from "./bv_logo.jpg";
// import './headerForAll.css';
// import './table.css';

// function View_order() {

//     return ( 
//         <>
//         {/* HEADER */}
//        <div className="header">
//           <div className="logo">
//             <img src={logo2} alt="Logo"/>
//           </div>
//           <div className="bv_logo">
//             <img src={bv_logo} alt="Logo"/>
//           </div>
//        </div>
//         <div className='tableWrap'>
//             <div>
//             <br></br><br></br><br></br>
//                 <table className="td1" border="2" align="center" cellPadding={9}>
//                 <th>Item ID </th>  
//                 <th>Item Name </th>
//                 <th>QTY </th>
//                 <th>Price </th>
//                 <th>Total Price </th>

                                   
//                     <tr >
//                         <td>p03</td>
//                         <td>chips</td>
//                         <td>3</td>
//                         <td>10</td>
//                         <td>30</td>
                        
//                     </tr> <tr >
//                         <td>p01</td>
//                         <td>kit-kat</td>
//                         <td>2</td>
//                         <td>50</td>
//                         <td>100</td>
                      
//                     </tr>
//                     <tr >
//                         <th  colspan="4"> TOTAL</th>
//                         <td> 130</td>
//                     </tr>
                       
// {/*                     
//                 ))} */}
//                     </table>
            
//             </div>
//         </div>
    
//         </>
//     )
// }

// export default View_order;
import "../login/login.css";
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import './table.css';

function View_order() {

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
                <table className="td1" border="2" align="center" cellPadding={9}>
                <th>Item ID </th>  
                <th>Item Name </th>
                <th>QTY </th>
                <th>Price </th>
                <th>Total Price </th>

                                   
                    <tr >
                        <td>p03</td>
                        <td>chips</td>
                        <td>3</td>
                        <td>10</td>
                        <td>30</td>
                        
                    </tr> <tr >
                        <td>p01</td>
                        <td>kit-kat</td>
                        <td>2</td>
                        <td>50</td>
                        <td>100</td>
                      
                    </tr>
                    <tr >
                        <th  colspan="4"> TOTAL</th>
                        <td> 130</td>
                    </tr>
                       
{/*                     
                ))} */}
                    </table>
            
            </div>
        </div>
    
        </>
    )
}

export default View_order;

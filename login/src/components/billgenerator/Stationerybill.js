import { useState, useEffect, useContext } from "react";
import React from "react";
import './billgenerator.css';
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import { UserContext } from "../../UserContext";

function Stationerybill() {
  
  // Define the list of items and cart as empty arrays
  const [items, setItems] = useState([
    { id: "p01", name: "Pen", price: 10 },
    { id: "p02", name: "Pencil", price: 6 },
    { id: "p03", name: "Black Pen", price: 3 },
    { id: "p04", name: "Eraser", price: 5 },
    { id: "p05", name: "Scale", price: 10 }
  ]);
  const { user } = useContext(UserContext);
  console.log("user in bill",user)

  const [cart, setCart] = useState([]);

  const [itemId, setItemId] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);

  // Define functions to handle form submission and button clicks
  function handleFormSubmit(event) {

    event.preventDefault(); // prevent default form submission

    // Find the selected item in the list of items
    const selectedItem = items.find(item => item.id === itemId);

    if (selectedItem) {
      // Create a new item object and add it to the cart
      const newItem = {
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: itemQuantity
      };
      setCart([...cart, newItem]);

      // Clear the form inputs
      setItemId("");
      setItemQuantity(0);
    } 
    else {
      alert("Invalid item ID. Please try again.");
    }
  }

  function handleGenerateBillClick() {
    // Clear the cart
    setCart([]);
  
    // Calculate the total cost
    let total = 0;
    cart.forEach(function (item) {
      total += item.price * item.quantity;
    });
  
    // Add the total cost to the bill HTML
    let billHTML = `
      <div id="billContainer">
        <h2 id="h2Bill"}>Bill</h2>
    `;
    cart.forEach(function (item, index) {
      let itemHTML = `
        <span id="invoiceItems">${item.name || ""} - (${item.quantity || ""} x ₹${item.price || ""}) = ₹ </span>
        <span>${(item.quantity || 0) * (item.price || 0)}</span>
        <br/>
      `;
      billHTML += itemHTML;
    });
  
    billHTML += `<h2 className="h2BG" >Total Cost: ₹${total}</h2>`;
    billHTML += `<button className="placeOrder" id="place-order-button">Place Order</button></div>`;
  
    // Display the bill HTML
    document.body.innerHTML = billHTML;
  
    // Add place order button event listener
    const placeOrderButton = document.getElementById("place-order-button");
    if (placeOrderButton) {
      placeOrderButton.addEventListener("click", handlePlaceOrderClick);
    }
  }
  

 function handlePlaceOrderClick() {
   // Send the order details to the server or perform other actions
   alert("Order placed successfully!");
 }
 
 useEffect(() => {
   const placeOrderButton = document.getElementById("place-order-button");
   if (placeOrderButton) {
     placeOrderButton.addEventListener("click", handlePlaceOrderClick);
   }
 }, [cart]);

  return (
    
    <>
     <div className="header">
        <div className="logo">
          <img src={logo2} />
        </div>
        <div className="bv_logo">
          <img src={bv_logo} />
        </div>
      </div>
    <div className="containerBG">
    <h1 className="h1BG">BILL GENERATOR</h1>
      <div style={{ display: "flex", justifyContent: "center", margin: "-2%" }}>
        <div className="itemslist">
          <h2 className="h2BG">Items</h2>
          <ul>
            {items.map((item) => (
            <li key={item.id}>
            {item.id} - {item.name} - ₹{item.price}
            </li>
            ))}
          </ul>
        </div>

      <div>
      <form className="formBG" id="bill-form" onSubmit={handleFormSubmit}>
        <label className="labelbg" htmlFor="item-id">Item ID:</label>
        <input className="itemid" type="text" id="item-id" placeholder="Enter item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} />
        <label className="labelbg" htmlFor="item-quantity">Item Quantity:</label>
        <input className="itemq" type="number" id="item-quantity" placeholder="Enter item quantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button className="addToCart" type="submit">Add to Cart</button>
      </form>

      <div className="cart">
        <h2 className="h2BG">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li className="cartItemList" key={item.id}>
                {item.name} ({item.quantity} x {item.price})
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <button className="generateBill" onClick={handleGenerateBillClick}>Generate Bill</button>
        )}
      </div>
    </div>
  </div>
</div>
</>

);

}

export default Stationerybill;

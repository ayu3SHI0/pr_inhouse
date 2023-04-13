import React, { useState, useRef, useEffect } from "react";
import Data from "./data.json";
import "../../headerForAll.css";
import logo2 from "../images/logo2.png";
import bv_logo from "../images/bv_logo.jpg";
import "./table.css";
import axios from "axios";

function Table_stationery() {
  const [datas, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  const [sproducts, setsProducts]= useState([]);
  useEffect(() => {
    console.log("product in use effect",sproducts)
   axios.get("http://localhost:9002/api/all-sproducts")
   .then((res) => setsProducts(res.data))
  },[])
  console.log("out",sproducts)

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="logo">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="bv_logo">
          <img src={bv_logo} alt="Logo" />
        </div>
      </div>
      <div className="tableWrap">
        <div>
          <AddItem setData={setData} />
          <form>
            <table className="td1" border="2">
              <th>PRODUCT ID </th>
              <th>PNAME </th>
              <th>PRICE </th>
              <th>QUANTITY </th>
              {sproducts?.map((current) =>
                editState === current.sproductId ? (
                  <EditItem current={current} datas={datas} setData={setData} />
                ) : (
                  <tr key={current.sproductId}>
                    <td>{current.sproductId}</td>
                    <td>{current.sproductName}</td>
                    <td>{current.sproductPrice}</td>
                    <td>{current.sproductQuantity}</td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
              </table>
          </form>
        </div>
      </div>
    </>
  );
  // function handleUpdate(id) {
  //  console.log("update",id)
  // //  axios.put(`http://localhost:9002/api/products/${id}`)
  // }
  function handleEdit(id) {
    setEditState(id);
  }
  function handleDelete(id) {
    console.log(id)
   axios.delete(`http://localhost:9002/api/sproducts/${id}`)
  }
}
function EditItem({ current, datas, setData }) {
  function handlePid(event) {
    const pid = event.target.value;
    const regex = /^p\d+$/;
    if (regex.test(pid)) {
      setData(pid);
    }
    const updatedData = datas.map((d) =>
      d.id === current.id ? { ...d, pid: pid } : d
    );
    setData(updatedData);
  }
  function handlePname(event) {
    const pname = event.target.value;
    const updatedData = datas.map((d) =>
      d.id === current.id ? { ...d, pname: pname } : d
    );
    setData(updatedData);
  }
  function handleUpdate(id,name,quantity,price) {
    console.log("update",id)
    axios.put(`http://localhost:9002/api/products/${id}`,{
      name,
      quantity,
      price,
    }
    ).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
   }
  function handlePrice(event) {
    const price = event.target.value;
    const updatedData = datas.map((d) =>
      d.id === current.id ? { ...d, price: price } : d
    );
    setData(updatedData);
  }
  function handleQty(event) {
    const qty = event.target.value;
    const updatedData = datas.map((d) =>
      d.id === current.id ? { ...d, qty: qty } : d
    );
    setData(updatedData);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handlePid}
          value={current.pid}
          name="pid"
          placeholder="Enter id"
          required
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          onChange={handlePname}
          value={current.pname}
          name="pname"
          placeholder="Enter name"
          required
        />
      </td>
      <td>
        <input
          type="number"
          onChange={handlePrice}
          value={current.price}
          name="price"
          placeholder="Enter price"
          required
        />
      </td>
      <td>
        <input
          type="number"
          onChange={handleQty}
          value={current.qty}
          name="qty"
          placeholder="Enter qty"
          required
        />
      </td>
      <td>
      <button type="submit" onClick={() => handleUpdate(current.pid,current.name,current.qty,current.price)}>Update</button>
      </td>
    </tr>
  );
}
function AddItem({ setData }) {
  const pidRef = useRef();
  const pnameRef = useRef();
  const priceRef = useRef();
  const qtyRef = useRef();
  function handleValues(event) {
    event.preventDefault();
    const pid = event.target.elements.pid.value;
    const pname = event.target.elements.pname.value;
    const price = event.target.elements.price.value;
    const qty = event.target.elements.qty.value;
    const newItem = {
      id: 4,
      pid,
      pname,
      price,
      qty,
    };
    setData((prevData) => prevData.concat(newItem));
    pidRef.current.value = "";
    pnameRef.current.value = "";
    priceRef.current.value = "";
    qtyRef.current.value = "";
  }
  const [sproduct, setsProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setsProduct({ ...sproduct, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("product", product);
    axios
      .post("http://localhost:9002/api/products", sproduct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
 };
  return (
    <>
      <form>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={sproduct.id}
            onChange={handleChange}
          />
        </label>
        <label>
        Name:
          <input
            type="text"
            name="name"
            value={sproduct.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={sproduct.quantity}
            onChange={handleChange}
          />
        </label>
        <label>
        Price:
          <input
            type="text"
            name="price"
            value={sproduct.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </>
    );
  }
  
  export default Table_stationery;
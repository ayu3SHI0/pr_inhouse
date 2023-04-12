const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
mongoose.set("strictQuery", true);
await mongoose.connect("mongodb://127.0.0.1:27017/goeazydb");
console.log("db connected");
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const ShopkeeperSchema = new mongoose.Schema({
Shopname: String,
ShopId: String,
Spassword: String,
});

const Shopkeepers = mongoose.model("Shopkeepers", ShopkeeperSchema);

const StudentSchema = new mongoose.Schema({
name: String,
SmartId: String,
password: String,
});

const Students = mongoose.model("Students", StudentSchema);

const productSchema = new mongoose.Schema({
productId: { type: String, required: true },
productName: { type: String, required: true },
productQuantity: { type: Number, required: true },
productPrice: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

//student login
server.post("/login", (req, res) => {
const { SmartId, password } = req.body;
Students.findOne({ SmartId: SmartId }, (err, user) => {
if (user) {
if (password === user.password) {
res.send({ message: "login successfull", user: user });
} else {
res.send({ message: "password do not match" });
}
 } 
});
});

//shopkeeper login
server.post("/Shopkeeper_login", (req, res) => {
const { ShopId, Spassword } = req.body;
Shopkeepers.findOne({ ShopId: ShopId }, (err, shop) => {
if (shop) {
if (Spassword === shop.Spassword) {
res.send({ message: "login successfull", shop: shop });
} else {
res.send({ message: "password do not match" });
}
} else {
res.send({ message: "shop not registered" });
}
});
});
//register
server.post("/register", (req, res) => {
const { name, SmartId, password } = req.body;
Students.findOne({ SmartId: SmartId }, (err, user) => {
if (user) {
res.send({ message: "user already registered!" });
} else {
const user = new Students({
name,
SmartId,
password,
});
user.save((err) => {
if (err) {
res.send(err);
} else {
res.send({ message: "Successfully Registered" });
}
});
}
});
});

// Create a products
server.post("/api/products", (req, res) => {
console.log("req", req);
const product = new Product({
productId: req.body.id,
productName: req.body.name,
productQuantity: req.body.quantity,
productPrice: req.body.price,
});

product.save((err) => {
if (err) {
console.error(err);
res.status(500).send("Error adding product!");
} else {
res.send("Product added successfully!");
}
});
});

// Update a product
server.put("/api/products/:id", (req, res) => {
const id = req.params.id;

Product.findOneAndUpdate(
{ id },
{
name: req.body.name,
quantity: req.body.quantity,
price: req.body.price,
},
(err) => {
if (err) {
console.error(err);
res.status(500).send("Error updating product!");
} else {
res.send("Product updated successfully!");
}
}
);
});

// Delete a products
server.delete("/api/products/:id", (req, res) => {
const id = req.params.id;

Product.deleteOne({ id }, (err) => {
if (err) {
console.error(err);
res.status(500).send("Error deleting product!");
} else {
res.send("Product deleted successfully!");
}
});
});

// Get all products
server.get("/api/all-products", (req, res) => {
Product.find({}, (err, products) => {
if (err) {
res.status(500).send(err);
} else {
res.status(200).send(products);
}
});
});

server.listen(9002, () => {
console.log("started at port 9002");
});
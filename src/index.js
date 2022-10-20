import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Products } from "./components/Inventory/Products";
import { ProductCreate } from "./components/Inventory/ProductCreate";
import { ProductEdit } from "./components/Inventory/ProductEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { Navbar } from "./components/Navbar";
import "semantic-ui-css/semantic.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route
        path="/product/create"
        element={<ProductCreate></ProductCreate>}
      ></Route>
      <Route path="/product/edit" element={<ProductEdit></ProductEdit>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

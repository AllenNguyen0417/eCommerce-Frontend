import { Button, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import api from "../api/InventoryAPI";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export function ProductEdit() {
  const navigate = useNavigate();
  const [upc, setUpc] = useState("");
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [availableStock, setAvailableStock] = useState("");
  const [reservedStock, setReservedStock] = useState("");
  const [shippedStock, setShippedStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const initialValues = {
    upc: "",
    productName: "",
    brand: "",
    category: "",
    productDescription: "",
    pricePerUnit: "",
    availableStock: "",
    reservedStock: "",
    shippedStock: "",
    imageUrl: "",
  };

  const productEdit = async () => {
    await api
      .put("/updateproduct", {
        upc,
        productName,
        brand,
        category,
        productDescription,
        pricePerUnit,
        availableStock,
        reservedStock,
        shippedStock,
        imageUrl,
      })
      .then(function (response) {
        navigate("/products");
      });
  };

  useEffect(() => {
    setUpc(localStorage.getItem("upc"));
    setProductName(localStorage.getItem("productName"));
    setBrand(localStorage.getItem("brand"));
    setCategory(localStorage.getItem("category"));
    setProductDescription(localStorage.getItem("productDescription"));
    setPricePerUnit(localStorage.getItem("pricePerUnit"));
    setAvailableStock(localStorage.getItem("availableStock"));
    setReservedStock(localStorage.getItem("reservedStock"));
    setShippedStock(localStorage.getItem("shippedStock"));
    setImageUrl(localStorage.getItem("imageUrl"));
  }, []);

  return (
    <div className="container">
      <Form style={{ padding: "50px 100px" }} onSubmit={productEdit}>
        <Form.Field>
          <label>UPC</label>
          <input
            name="upc"
            onChange={(e) => {
              setUpc(e.target.value);
            }}
            placeholder="UPC"
            value={upc}
            disabled
          />
        </Form.Field>
        <Form.Field>
          <label>Product Name</label>
          <input
            name="productName"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            placeholder="Product Name"
            value={productName}
          />
        </Form.Field>
        <Form.Field>
          <label>Brand</label>
          <input
            name="brand"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            placeholder="Brand"
            value={brand}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Category"
            value={category}
          />
        </Form.Field>
        <Form.Field>
          <label>Product Description</label>
          <input
            name="productDescription"
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            placeholder="Product Description"
            value={productDescription}
          />
        </Form.Field>
        <Form.Field>
          <label>Price Per Unit</label>
          <input
            name="pricePerUnit"
            onChange={(e) => {
              setPricePerUnit(e.target.value);
            }}
            placeholder="Price Per Unit"
            value={pricePerUnit}
          />
        </Form.Field>
        <Form.Field>
          <label>Available Stock</label>
          <input
            name="availableStock"
            onChange={(e) => {
              setAvailableStock(e.target.value);
            }}
            placeholder="Available Stock"
            value={availableStock}
          />
        </Form.Field>
        <Form.Field>
          <label>Reserved Stock</label>
          <input
            name="reservedStock"
            onChange={(e) => {
              setReservedStock(e.target.value);
            }}
            placeholder="Reserved Stock"
            value={reservedStock}
          />
        </Form.Field>
        <Form.Field>
          <label>Shipped Stock</label>
          <input
            name="shippedStock"
            onChange={(e) => {
              setShippedStock(e.target.value);
            }}
            placeholder="Shipped Stock"
            value={shippedStock}
          />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            name="imageUrl"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            placeholder="Image URL"
            value={imageUrl}
          />
        </Form.Field>
        <Button
          style={{ backgroundColor: "#0d6c07", color: "#ffffff" }}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

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

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  console.log("upc: " + localStorage.getItem("upc"));
  console.log("productName: " + localStorage.getItem("productName"));

  return (
    <div class="container">
      <Form style={{ padding: "50px 100px" }} onSubmit={productEdit}>
        <Form.Field>
          <label>UPC</label>
          <input
            name="upc"
            onChange={(e) => {
              setUpc(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="UPC"
            value={upc}
            disabled
          />
          <p className="error-message">{formErrors.upc}</p>
        </Form.Field>
        <Form.Field>
          <label>Product Name</label>
          <input
            name="productName"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Product Name"
            value={productName}
          />
          <p className="error-message">{formErrors.productName}</p>
        </Form.Field>
        <Form.Field>
          <label>Brand</label>
          <input
            name="brand"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Brand"
            value={brand}
          />
          <p className="error-message">{formErrors.brand}</p>
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Category"
            value={category}
          />
          <p className="error-message">{formErrors.category}</p>
        </Form.Field>
        <Form.Field>
          <label>Product Description</label>
          <input
            name="productDescription"
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Product Description"
            value={productDescription}
          />
          <p className="error-message">{formErrors.productDescription}</p>
        </Form.Field>
        <Form.Field>
          <label>Price Per Unit</label>
          <input
            name="pricePerUnit"
            onChange={(e) => {
              setPricePerUnit(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Price Per Unit"
            value={pricePerUnit}
          />
          <p className="error-message">{formErrors.pricePerUnit}</p>
        </Form.Field>
        <Form.Field>
          <label>Available Stock</label>
          <input
            name="availableStock"
            onChange={(e) => {
              setAvailableStock(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Available Stock"
            value={availableStock}
          />
          <p className="error-message">{formErrors.availableStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Reserved Stock</label>
          <input
            name="reservedStock"
            onChange={(e) => {
              setReservedStock(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Reserved Stock"
            value={reservedStock}
          />
          <p className="error-message">{formErrors.reservedStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Shipped Stock</label>
          <input
            name="shippedStock"
            onChange={(e) => {
              setShippedStock(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Shipped Stock"
            value={shippedStock}
          />
          <p className="error-message">{formErrors.shippedStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            name="imageUrl"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            style={{ height: "20px" }}
            placeholder="Image URL"
            value={imageUrl}
          />
          <p className="error-message">{formErrors.imageUrl}</p>
        </Form.Field>
        <Button
          style={{ backgroundColor: "#ee6e73", color: "#ffffff" }}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

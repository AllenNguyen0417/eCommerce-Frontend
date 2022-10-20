import { Button, Form } from "semantic-ui-react";
import { useState } from "react";
import api from "../api/InventoryAPI";
import "./ProductCreate.css";
import { useNavigate } from "react-router-dom";

export function ProductCreate() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));

    if (Object.keys(formErrors).length === 0) {
      productCreate();
      // navigate("/products");
      // .then(window.location.reload());
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.upc) {
      errors.upc = "UPC is required";
    }
    if (!values.productName) {
      errors.productName = "Product Name is required";
    }
    if (!values.brand) {
      errors.brand = "Brand is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.productDescription) {
      errors.productDescription = "Product Description is required";
    }
    if (!values.pricePerUnit) {
      errors.pricePerUnit = "Price Per Unit is required";
    }
    if (!values.availableStock) {
      errors.availableStock = "Available Stock is required";
    }
    if (!values.reservedStock) {
      errors.reservedStock = "Reserved Stock is required";
    }
    if (!values.shippedStock) {
      errors.shippedStock = "Shipped Stock is required";
    }
    if (!values.imageUrl) {
      errors.imageUrl = "Image URL is required";
    }
    return errors;
  };

  const productCreate = async () => {
    await api
      .post("/createproduct", {
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

  return (
    <div class="container">
      <Form style={{ padding: "50px 100px" }} onSubmit={handleSubmit}>
        <Form.Field>
          <label>UPC</label>
          <input
            name="upc"
            onChange={(e) => {
              setUpc(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="UPC"
            values={formValues.upc}
          />
          <p className="error-message">{formErrors.upc}</p>
        </Form.Field>
        <Form.Field>
          <label>Product Name</label>
          <input
            name="productName"
            onChange={(e) => {
              setProductName(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Product Name"
            values={formValues.productName}
          />
          <p className="error-message">{formErrors.productName}</p>
        </Form.Field>
        <Form.Field>
          <label>Brand</label>
          <input
            name="brand"
            onChange={(e) => {
              setBrand(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Brand"
            values={formValues.brand}
          />
          <p className="error-message">{formErrors.brand}</p>
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Category"
            values={formValues.category}
          />
          <p className="error-message">{formErrors.category}</p>
        </Form.Field>
        <Form.Field>
          <label>Product Description</label>
          <input
            name="productDescription"
            onChange={(e) => {
              setProductDescription(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Product Description"
            values={formValues.productDescription}
          />
          <p className="error-message">{formErrors.productDescription}</p>
        </Form.Field>
        <Form.Field>
          <label>Price Per Unit</label>
          <input
            name="pricePerUnit"
            onChange={(e) => {
              setPricePerUnit(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Price Per Unit"
            values={formValues.pricePerUnit}
          />
          <p className="error-message">{formErrors.pricePerUnit}</p>
        </Form.Field>
        <Form.Field>
          <label>Available Stock</label>
          <input
            name="availableStock"
            onChange={(e) => {
              setAvailableStock(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Available Stock"
            values={formValues.availableStock}
          />
          <p className="error-message">{formErrors.availableStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Reserved Stock</label>
          <input
            name="reservedStock"
            onChange={(e) => {
              setReservedStock(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Reserved Stock"
            values={formValues.reservedStock}
          />
          <p className="error-message">{formErrors.reservedStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Shipped Stock</label>
          <input
            name="shippedStock"
            onChange={(e) => {
              setShippedStock(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Shipped Stock"
            values={formValues.shippedStock}
          />
          <p className="error-message">{formErrors.shippedStock}</p>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            name="imageUrl"
            onChange={(e) => {
              setImageUrl(e.target.value);
              handleChange(e);
            }}
            style={{ height: "20px" }}
            placeholder="Image URL"
            values={formValues.imageUrl}
          />
          <p className="error-message">{formErrors.imageUrl}</p>
        </Form.Field>
        <Button
          style={{ backgroundColor: "#ee6e73", color: "#ffffff" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

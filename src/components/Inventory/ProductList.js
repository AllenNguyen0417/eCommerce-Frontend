import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { ProductEdit } from "./ProductEdit";

export function ProductList({ products }) {
  const setProductData = (
    upc,
    productName,
    brand,
    category,
    productDescription,
    pricePerUnit,
    availableStock,
    reservedStock,
    shippedStock,
    imageUrl
  ) => {
    localStorage.setItem("upc", upc);
    localStorage.setItem("productName", productName);
    localStorage.setItem("brand", brand);
    localStorage.setItem("category", category);
    localStorage.setItem("productDescription", productDescription);
    localStorage.setItem("pricePerUnit", pricePerUnit);
    localStorage.setItem("availableStock", availableStock);
    localStorage.setItem("reservedStock", reservedStock);
    localStorage.setItem("shippedStock", shippedStock);
    localStorage.setItem("imageUrl", imageUrl);
  };

  const columns = [
    {
      name: "UPC",
      selector: (row) => row.upc,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,

      sortable: true,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Product Description",
      selector: (row) => row.productDescription,
      sortable: true,
    },
    {
      name: "Price Per Unit",
      selector: (row) => row.pricePerUnit,
      sortable: true,
    },
    {
      name: "Available Stock",
      selector: (row) => row.availableStock,
      sortable: true,
    },
    {
      name: "Reserved Stock",
      selector: (row) => row.reservedStock,
      sortable: true,
    },
    {
      name: "Shipped Stock",
      selector: (row) => row.shippedStock,
      sortable: true,
    },
    {
      name: "Shipped Stock",
      selector: (row) => row.shippedStock,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={row.imageUrl}
          alt={row.productName}
          width="100px"
          height="100px"
        />
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <Button.Group basic size="medium">
          <Link to="/product/edit">
            <Button
              icon="edit"
              onClick={() => {
                setProductData(
                  row.upc,
                  row.productName,
                  row.brand,
                  row.category,
                  row.productDescription,
                  row.pricePerUnit,
                  row.availableStock,
                  row.reservedStock,
                  row.shippedStock,
                  row.imageUrl
                );
              }}
            />
          </Link>

          <Button icon="trash" />
        </Button.Group>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        title="Inventory"
        columns={columns}
        data={products}
        defaultSortFieldId={1}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
      />
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ backgroundColor: "#ee6e73", margin: "20px 0px 0px 10px" }}
        >
          <Link to="/product/create" style={{ color: "white" }}>
            Create Product
          </Link>
        </Button>
      </div>
    </div>
  );
}

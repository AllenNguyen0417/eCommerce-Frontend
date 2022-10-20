import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export function ProductList({ products }) {
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
    // {
    //   name: "Action",
    //   selector: (row) => (
    //     <></>
    //   ),
    // },
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
          <Link to="/products/create" style={{ color: "white" }}>
            Create Product
          </Link>
        </Button>
      </div>
    </div>
  );
}

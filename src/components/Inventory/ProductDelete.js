import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import api from "../api/InventoryAPI";

export function ProductDelete(itemUpc) {
  const handleButtonPress = (event) => {
    if (event.key === "Enter") {
      console.log("asd");
    }
  };
  confirmAlert({
    title: "Confirm to delete product",
    message: "Are you sure?",
    buttons: [
      {
        label: "Yes",
        id: "yes-button",
        onClick: () => {
          window.location.reload();
          api.delete("http://localhost:8080/api/inventory/deleteproduct", {
            data: { upc: itemUpc },
            headers: {},
          });
        },
      },
      {
        label: "No",
      },
    ],
  });
}

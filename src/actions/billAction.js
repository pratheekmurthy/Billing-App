import axios from "../config/axios";


// Add lineItems

export const addLineItems = (data) => {
  return { type: "ADD_LINEITEMS", payload: data };
};

//Remove lineItems

export const removeLineItems = (id) => {
  return { type: "REMOVE_LINEITEMS", payload: id };
};
// empty lineItems
export const emptyLineItems = () => {
  return { type: "CLEAR_LINEITEMS" };
};




// create a Bill
const addBill = (data) => {
  return { type: "ADD_BILL", payload: data };
};
export const CreateBill = (data) => {
  return (dispatch) => {
    axios
      .post("/bills", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(addBill(result));
        dispatch(emptyLineItems());
        alert("bill generated")
      })
      .catch((err) => alert(err.message));
  };
};

// Get All Bill
const getAllBill = (data) => {
  return { type: "GET_ALLBILL", payload: data };
};
export const startGetAllBill = () => {
  return (dispatch) => {
    axios
      .get("/bills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(getAllBill(result));
      })
      .catch((err) => alert(err.message));
  };
};

import axios from "../config/axios";
import swal from 'sweet-alert'


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

// delete a bill
const deleteBill = (data) => {
    return { type: "DELETE_BILL", payload: data };
  };
export const startDeleteBill = (id) => {
    return (dispatch) => {
      axios
        .delete(`/bills/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const result = response.data;
          dispatch(deleteBill(result));
          swal("hey", "you have removed this bill successfully", "success");
        })
        .catch((err) => alert(err.message));
    };
  };

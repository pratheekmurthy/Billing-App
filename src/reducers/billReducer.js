const initialLineItems = [];

export const lineItems = (state = initialLineItems, action) => {
  switch (action.type) {
    case "ADD_LINEITEMS": {
      return [...state, action.payload];
    }
    case "REMOVE_LINEITEMS": {
      return state.filter((product) => product.product !== action.payload);
    }
    case "CLEAR_LINEITEMS": {
      state.length = 0;
      return [...state];
    }
    default: {
      return [...state];
    }
  }
}


const currentBillinitialState = [];

 export const currentBillReducer = (state = currentBillinitialState, action) => {
  switch (action.type) {
    case "ADD_BILL": {
      return [{ ...action.payload }];
    }
    default: {
      return [...state];
    }
  }
}

const initialallBill = [];

export const allBillReducer = (state = initialallBill, action) => {
  switch (action.type) {
    case "GET_ALLBILL": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
}


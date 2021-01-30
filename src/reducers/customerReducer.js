const initialStateValue = []

const customersReducer = (state = initialStateValue, action) => {
    switch(action.type) {
        case 'ALL_CUST' : {
            return [...action.payload]
        }
        case 'ADD_CUST' : {
            return [action.payload,...state]
        }
        case 'DELETE_CUST' : {
            return state.filter((customer) => {
                return customer._id !== action.payload._id
            })
        }
        case 'EDIT_CUST' : {
            return state.map((customer) => {
                if(customer._id === action.payload._id) {
                    return {...customer,...action.payload}
                } else {
                    return {...customer}
                }
            })
        }
        default: {
            return state
        }
    }
}

export default customersReducer
const initialStateValue = []

const productsReducer = (state = initialStateValue, action) => {
    switch(action.type) {
        case 'ALL_PROD': {
            return [...action.payload]
        }
        case 'ADD_PROD' : {
            return [action.payload,...state]
        }
        case 'DELETE_PROD' : {
            return state.filter((product) => {
                return product._id !== action.payload._id
            })
        }
        case 'EDIT_PROD' : {
            return state.map((product) => {
                if(product._id === action.payload._id) {
                    return {...product,...action.payload}
                } else {
                    return {...product}
                }
            })
        }
        default: {
            return state 
        }
    }
}

export default productsReducer

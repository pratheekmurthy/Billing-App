const initialState = false

export const logReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'TOGGLE_STATE':{
            return !state;
        }
        default :{
            return state
        }
    }

}

const accountInitialState = {}

export const accountReducer=(state = accountInitialState,action)=>{
    switch(action.type){
        case 'ADD_ADMIN':{
            return [action.payload]
        }
        default : {
            return [state]
        }
    }
}

import axios from '../config/axios'

const getAllProd = (prod) => {
    return {
        type: 'ALL_PROD',
        payload: prod
    }
}

const postProd = (prod) => {
    return {
        type: 'ADD_PROD',
        payload: prod
    }
}


const deleteProd = (prod) => {
    return {
        type:'DELETE_PROD',
        payload: prod
    }
}


const editProd = (prod) => {
    return {
        type: 'EDIT_PROD',
        payload: prod
    }
}

 export const startGetAllProd = () => {
    return (dispatch) => {
        axios.get('/products',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                dispatch(getAllProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}



export const startPostProd = (prod) => {
    return (dispatch) => {
        axios.post('/products',prod,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                dispatch(postProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startGetProd = (id) => {
    return (dispatch) => {
        axios.get(`/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                alert(result.name)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startDeleteProd = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                dispatch(deleteProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startEditProd = (id,prod) => {
    return (dispatch) => {
        axios.put(`/products/${id}`,prod, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else {
                dispatch(editProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
import axios from '../config/axios'
import swal from 'sweetalert'


const login =() =>{
        return {type : 'TOGGLE_STATE'}
}



export const formSubmit =(data,handleRedirect)=>{
    return(dispatch)=>{
        axios.post("/users/register",data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            }else{
            handleRedirect()
            swal("cool", "You have Registered in successfully!", "success")
        }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const loginformSubmit =(data,handleRedirect)=>{
    return(dispatch)=>{
        axios.post("/users/login",data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            }else{
                dispatch(login())
                localStorage.setItem('token',result.token)
            handleRedirect()
            swal("cool", "You have loggedIN successfully!", "success")
        }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    }
export const toggleStatus=()=>{
    return {type : 'TOGGLE_STATE'}
}

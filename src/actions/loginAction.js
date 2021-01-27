import axios from 'axios'
import swal from 'sweetalert'


const login =() =>{
        return {type : 'TOGGLE_STATE'}
}

export const formSubmit =(data,handleRedirect)=>{
    return(dispatch)=>{
        console.log("i am in genearator")
        axios.post("http://dct-billing-app.herokuapp.com/api/users/register",data)
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
        console.log(data,"i am in gen")
        axios.post("http://dct-billing-app.herokuapp.com/api/users/login",data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            }else{
                dispatch(login)
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

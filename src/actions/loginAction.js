import axios from 'axios'
import swal from 'sweet-alert'

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
            swal("cool", "You have registered successfully!", "success")
        }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
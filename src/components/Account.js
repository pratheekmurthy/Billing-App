import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Account =(props)=>{
    const [Account,setAccount]= useState({})
    const token = localStorage.getItem("token")
    

    useEffect(()=>{
        axios.get("http://dct-billing-app.herokuapp.com/api/users/account",{ headers : { 'Authorization' : `Bearer ${token}`}})
    .then((response)=>{
        const result = response.data
        if(result.hasOwnProperty('errors')) {
            alert(result.message)
        }else{
            setAccount(response.data)
    }
    })
    .catch((err)=>{
        console.log(err.message)
    })
    

    },[])
    
    


    return (<div>
        <h3>Account Details</h3>
        <p> Name : {Account.username}</p>
        <p>Email :  {Account.email}</p>
        <p>Password : ******** </p>
        <p>Business Name : {Account.businessName}</p>
        <p>Address : {Account.address}</p>
        <p>createdon : {Account.createdAt}</p>


    </div>)
}

export default Account
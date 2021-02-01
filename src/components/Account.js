import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAccount} from '../actions/loginAction'
import axios from 'axios'


const Account =(props)=>{
    const Account = useSelector(state => state.profile)
    const dispatch = useDispatch()


    // const [Account,setAccount]= useState({})
    // const token = localStorage.getItem("token")
    

    // useEffect(()=>{
    //     axios.get("http://dct-billing-app.herokuapp.com/api/users/account",{ headers : { 'Authorization' : `Bearer ${token}`}})
    // .then((response)=>{
    //     const result = response.data
    //     if(result.hasOwnProperty('errors')) {
    //         alert(result.message)
    //     }else{
    //         setAccount(response.data)
    // }
    // })
    // .catch((err)=>{
    //     console.log(err.message)
    // })
    

    // },[])
    
    useEffect(()=>{
        dispatch(startGetAccount())
        
    },[dispatch])


    return (<div>
        <h3>Account Details</h3>
        <p> Name : {Account[0].username}</p>
        <p>Email :  {Account[0].email}</p>
        <p>Password : ******** </p>
        <p>Business Name : {Account[0].businessName}</p>
        <p>Address : {Account[0].address}</p>
        <p>createdon : {Account[0].createdAt}</p>


    </div>)
}

export default Account
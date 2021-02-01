import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAccount} from '../actions/loginAction'
import axios from 'axios'


const Account =(props)=>{
    const Account = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetAccount())
        
    },[dispatch])


    return (<div className="accountdiv">
        <div class="card" style={{width: '18rem;'}}>
  <div class="card-body">
    <h5 class="card-title">Account Details</h5>
        <p>Name : {Account[0].username}</p>
        <p>Email :  {Account[0].email}</p>
        <p>Password : ******** </p>
        <p>Business Name : {Account[0].businessName}</p>
        <p>Address : {Account[0].address}</p>
        <p>createdon : {Account[0].createdAt}</p>
  </div>
</div>
    </div>)
}

export default Account
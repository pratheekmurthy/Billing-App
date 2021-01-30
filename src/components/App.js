import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {toggleStatus} from '../actions/loginAction'
import Navbar from './Navbar'



const App=(props)=>{

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token'))
    dispatch(toggleStatus())
  },[])


  return <div>
    <h1>Billing App</h1>
    <Navbar/>
  </div>
}

export default App;

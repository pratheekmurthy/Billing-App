import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {LinkWrapper, Wrapper } from '../styling/app-styled'
import {toggleStatus} from '../actions/loginAction'
import Navbar from './Navbar'



const App=(props)=>{

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token'))
    dispatch(toggleStatus())
  },[])


  return(
    <div>
    <Wrapper>
      <LinkWrapper>
    <Navbar/>
    </LinkWrapper>
    </Wrapper>
    </div>
  )
}

export default App;

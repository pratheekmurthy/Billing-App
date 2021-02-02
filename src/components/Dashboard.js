import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Button,Grid,TextField,Paper} from '@material-ui/core'

const Dashboard =(props)=>{
    const customers = useSelector(state => state.customer)
    const products = useSelector(state=> state.products)
    const bills= useSelector(state=> state.allBill)


    return (<div>
       <Paper elevation={3}>
        <h1>Total Customers</h1><br/>
        <h2>{customers.length}</h2>
       </Paper>
        
    </div>)
}

export default Dashboard
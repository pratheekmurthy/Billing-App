import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addLineItems,CreateBill} from '../../actions/billAction'
import BillDetails from './BillDetails'

const Lineitems =(props)=>{
    const {customerId,date} = props
    const [productId,setproductId] = useState("")
    const [quan,setquantity] = useState(0)
    

    const lineitems = useSelector(state => state.lineItem)
    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)
    
    const dispatch = useDispatch()

    const handleProduct =(e)=> setproductId(e.target.value)
    const handledecquantiy =(e)=>{
        if(quan >0){
            setquantity(quan -1)
        }
    }

    
    const handleIncQuantity =(e)=>setquantity(quan + 1)

    const handleAdd =(e)=>{
        if(productId && quan){
            const data ={product:productId,quantity:quan};
            dispatch(addLineItems(data))
            setquantity(0)
            setproductId("")
            
        }

    }

    const generatebill =(e)=>{
        const data = {
            date : date,
            customer : customerId,
            lineItems : lineitems
        }
        dispatch(CreateBill(data))
        
    }


    return(<div><br/>
        <select value={productId} onChange={handleProduct}>
            <option value="">select Product</option>
            {
                products.map((product)=>{
                    return <option value={product._id}>{product.name}</option>
                })
            }
        </select>&nbsp;
        <button onClick={handledecquantiy}>-</button>{quan}<button onClick={handleIncQuantity}>+</button><button onClick={handleAdd}>Add</button><br/>
        <button onClick={generatebill}>Generate Bill</button>
        <BillDetails />
    </div>)


}

export default Lineitems

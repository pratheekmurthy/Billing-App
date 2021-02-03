import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addLineItems,CreateBill} from '../../actions/billAction'
import BillDetails from './BillDetails'
import Showaddedproduct from './Showaddedproduct'


const Lineitems =(props)=>{
    const {customerId,date} = props
    const [productId,setproductId] = useState("")
    const [quan,setquantity] = useState(1)
    

    const lineitems = useSelector(state => state.lineItem)
    const products = useSelector(state => state.products)
    
    
    const dispatch = useDispatch()

    const handleProduct =(e)=> setproductId(e.target.value)
    const handledecquantiy =(e)=>{
        if(quan >1){
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
        {
            productId.length >0 ? (<div><button onClick={handledecquantiy} class="btn btn-light">-</button>{quan}<button onClick={handleIncQuantity} class="btn btn-light">+</button><button onClick={handleAdd} className="btn btn-primary">Add</button><br/></div>):(<div></div>)
        }
        <Showaddedproduct generatebill={generatebill}/>
        <BillDetails />
    </div>)


}

export default Lineitems

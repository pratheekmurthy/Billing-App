import React from 'react'
import {useSelector} from 'react-redux'
import {Paper} from '@material-ui/core'

const Dashboard =(props)=>{
    const customers = useSelector(state => state.customer)
    const products = useSelector(state=> state.products)
    const bills= useSelector(state=> state.allBill)

    const lastfivecustomers =[]
    const lastfiveproducts =[]
    const lastfivebills =[]
    
    let arr1=[];
    let arr =[];

    //Display name of product from id
    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0]?.name;
    }

    //Display name of customer from id
    const displayCustomername =(id)=>{
        arr1 = customers.filter((customer)=>{
            return customer._id === id
        })
        return arr1[0]?.name
    }
    //Calculate Total Rvenue
    const calculateRevenue=()=>{
        let count = 0;
        {
            bills.map((bill)=>{
                return count += bill.total;
            })
        }
        return count
    }

    //calculate last five customers
    for(let i= customers.length-1;i>customers.length-6;i--){
        lastfivecustomers.push(customers[i])
    }

    //calculate last five products
    for(let i= products.length-1;i>products.length-6;i--){
        lastfiveproducts.push(products[i])
    }

    //calculate last five bills
    for(let i= bills.length-1;i>bills.length-6;i--){
        lastfivebills.push(bills[i])
    }
    


    return (<div><br/>
            <div className="dasboardpapercontainer">
            <div className="dashboardpaper">
            <Paper elevation={3}>
                <h1>Total Customers</h1><br/>
                <h2>{customers.length}</h2>
            </Paper> 
        </div>
        <div className="dashboardpaper">
        <Paper elevation={3}>
            <h1>Total Products</h1><br/>
            <h2>{products.length}</h2>
        </Paper> 
        </div>
        <div className="dashboardpaper">
        <Paper elevation={3}>
            <h1>Total Sales</h1><br/>
            <h2>{bills.length}</h2>
        </Paper> 
        </div>
        <div className="dashboardpaper">
        <Paper elevation={3}>
            <h1>Total Revenue</h1><br/>
            <h2>{calculateRevenue()}</h2>
        </Paper> 
        </div>
        </div>
            <div>
                <br/>
                <h2>Recently Added Customers</h2>
                <div className="customercard">
                {
                    lastfivecustomers.map((customer)=>{
                        if(customer){
                            return (<div className="customercard">
                            <div class="card" style={{width: "20rem"}}>
                                <img src="./logo.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">{customer.name}</h5>
                                <p>email :{customer.email}</p>
                                <p>Mobile:{customer.mobile}</p>
                                </div>
                            </div>
                    </div>)
                        }
                    })
                }</div>
            </div>
            <div>
                <br/><h2>Recently Added Products</h2>
               <div className="customercard">{
                    lastfiveproducts.map((product)=>{
                        if(product){
                            return (
                                <div className="customercard">
                        <div class="card" style={{width: "20rem"}}>
                            <img src="./foodlogo.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p>Price :{product.price}rs</p>
                            </div>
                        </div>
                </div>
                            )
                        }
                    })
                }</div>
            </div>
            <div>
                <br/><h2>Recent Transactions</h2>
                <div className="customercard">
                    {
                        lastfivebills.map((bill)=>{
                            if(bill){
                                return(<div>
                    <div className="customercard">
                        <div class="card" style={{width: "20rem"}}>
                            <img src="./billlogo.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Customer Name : {displayCustomername(bill.customer)}</h5>
                            <p>Date : {bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}</p>
                            <p>Purchase Details</p>
                            {
                            bill.lineItems.map((item)=>{
                                return <li>{displayname(item.product)} -{item.price}rs * {item.quantity} = {item.subTotal}</li>
                            })
                            }
                        <p>Total Bill Amount - {bill.total}rs</p>
                    </div>
                    </div>
                    </div>
                </div>)
                            }
                        })
                    }
                </div>
            </div>
        </div>
   )
}

export default Dashboard
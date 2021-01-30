import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {startGetAllProd} from '../../actions/products-actions'
import ProductItem from './ProductItem'

const ProductsList = (props) => {
    
    const products = useSelector(state => state.products)
    
    return (
        <div>
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div>
                <h2>No of Products - { products.length } </h2>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <ProductItem />
                    </tbody>
                    </table>
                </div> 
             )}
        </div>
    )
}

export default ProductsList
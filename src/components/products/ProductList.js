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
                <h3>No of Products - { products.length } </h3>
                <ProductItem />  
                </div> 
             )}
        </div>
    )
}

export default ProductsList
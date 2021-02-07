import React from 'react'
import { useSelector} from 'react-redux'
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
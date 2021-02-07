import React from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductList'

const ProductsContainer = (props) => {


    return (
        <div className="container">
            <ProductForm />
            <ProductsList />
            
            
        </div>
    )
}

export default ProductsContainer
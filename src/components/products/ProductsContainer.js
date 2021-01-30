import React from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductList'

const ProductsContainer = (props) => {

    return (
        <div>
            <ProductsList />
            <ProductForm />
        </div>
    )
}

export default ProductsContainer
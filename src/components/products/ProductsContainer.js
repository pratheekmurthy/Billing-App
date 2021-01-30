import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAllProd} from '../../actions/products-actions'
import ProductForm from './ProductForm'
import ProductsList from './ProductList'

const ProductsContainer = (props) => {
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(startGetAllProd())

    // },[])

    return (
        <div>
            <ProductsList />
            <ProductForm />
        </div>
    )
}

export default ProductsContainer
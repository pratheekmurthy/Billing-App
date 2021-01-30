import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { startDeleteProd, startGetProd } from '../../actions/products-actions'
import ProductForm from './ProductForm'

const ProductItem = (props) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(startDeleteProd(id))
        }
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleEdit = (product) => {
        handleToggle()
        setId(product._id)
        setName(product.name)
        setPrice(product.price)
    }

    return (<div>
       
        <>
            {products.map((product) => {
                return <tr key={product._id}>
                    <td> {product.name} </td>
                    <td> {product.price} </td>
                    <td><button onClick={() => {
                        dispatch(startGetProd(product._id))
                    }}>View</button></td>
                    <td><button onClick={() => {
                        handleEdit(product)
                    }}>Edit</button></td>
                    <td><button onClick={() => {
                        deleteProduct(product._id)
                    }}>Delete</button></td>
                </tr>
            })}

                {open && (
                    <Modal isOpen={open}>
                    <ProductForm
                        id={id}
                        name={name}
                        price={price}
                        handleToggle={handleToggle}
                    />
                    <button onClick={() => {
                        handleToggle()
                    }}>close</button>
                    </Modal>
                )}
        </>
    </div>)
}

export default ProductItem
import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from 'react-modal'
import { startDeleteProd } from '../../actions/products-actions'
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

    return (<div >
       
        <><div className="customercard">
            {products.map((product) => {
                return (
                        <div className="customercard">
                        <div class="card" style={{width: "20rem"}}>
                            <img src="./foodlogo.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p>Price :{product.price}rs</p>
                            <button onClick={() => {
                                handleEdit(product)
                            }}><EditIcon/></button>
                            <button onClick={() => {
                                deleteProduct(product._id)
                            }}><DeleteIcon/></button>
                            </div>
                        </div>
                </div>
                )
            })}</div>
            <div>
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
                    }} className="btn-danger">close</button>
                    </Modal>
                )}
                </div>
        </>
        
    </div>)
}

export default ProductItem


{/* <tr key={product._id}>
                    <td> {product.name} -{product.price} </td>
                    <td><button onClick={() => {
                        dispatch(startGetProd(product._id))
                    }}><VisibilityIcon/></button>
                    <button onClick={() => {
                        handleEdit(product)
                    }}><EditIcon/></button>
                   <button onClick={() => {
                        deleteProduct(product._id)
                    }}><DeleteIcon/></button></td>
                </tr> */}
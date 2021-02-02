import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetCust, startDeleteCust } from '../../actions/customerActions'
import Modal from 'react-modal'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CustomerForm from './CustomerForm'

const CustomerItem = (props) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [candidate,setCandidate]= useState()

    const customers = useSelector(state => state.customers)
    const dispatch = useDispatch()

    const deleteCustomer = (_id) => {
        const confirmRemove = window.confirm('Are you sure ?')
        if(confirmRemove) {
            dispatch(startDeleteCust(_id))
    }
}
    const handleToggle = () => {
        setOpen(!open)
    }

    const handleEdit = (customer) => {
        handleToggle()
        setId(customer._id)
        setName(customer.name)
        setMobile(customer.mobile)
        setEmail(customer.email)
    }

    return (
            <>
            <div className="customercard">
            {customers.map((customer) => {
                return (<div className="customercard">
                        <div class="card" style={{width: "20rem"}}>
                            <img src="./logo.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{customer.name}</h5>
                            <p>email :{customer.email}</p>
                            <p>Mobile:{customer.mobile}</p>
                            <button onClick={() => {
                                handleEdit(customer)
                            }}><EditIcon/></button>
                            <button onClick={() => {
                                deleteCustomer(customer._id)
                            }}><DeleteIcon/></button>
                            </div>
                        </div>
                </div>
                )
            })}
            </div>

            {open && (
                    <Modal isOpen={open}>
                    <CustomerForm
                        id={id}
                        name={name}
                        mobile={mobile}
                        email={email}
                        handleToggle={handleToggle}
                    />
                    <button onClick={() => {
                        handleToggle()
                    }}>close</button>
                    </Modal>
                )}
        </>    
    )
}

export default CustomerItem
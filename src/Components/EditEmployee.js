import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { Button, Form } from "react-bootstrap"

import { EmployeeContext } from '../Contexts/EmployeeContext'

const EditEmployee = (props) => {

    // const { editEmployee } = useContext(EmployeeContext)

    const { dispatch } = useContext(EmployeeContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        setName(props.employee.name)
        setEmail(props.employee.email)
        setAddress(props.employee.address)
        setPhone(props.employee.phone)
    }, [props.employee])

    const handleSubmit = (e) => {
        e.preventDefault()
        const editedEmployee = {
            id: props.employee.id,
            name,
            email,
            address,
            phone
        }
        // editEmployee(props.employee.id, editedEmployee)
        dispatch({
            type: 'EDIT_EMPLOYEE',
            id: props.employee.id,
            editedEmployee: editedEmployee
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <br />

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <br />

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Enter Address"
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>

            <br />
            <br />

            <div className="d-grid gap-2">
                <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                >
                    Edit Employee
                </Button>
            </div>



        </Form>

    )
}

export default EditEmployee
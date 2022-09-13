import { useState, useEffect, useContext } from 'react';

import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { EmployeeContext } from '../Contexts/EmployeeContext'
import EditEmployee from './EditEmployee';

const Employee = ({ employee }) => {

    // const { deleteEmployee } = useContext(EmployeeContext)

    const { dispatch } = useContext(EmployeeContext)

    const [show, setShow] = useState(false)

    useEffect(() => {
        handleClose()
    }, [employee])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id="tooltip-disabled">
                            Edit
                        </Tooltip>
                    }>
                    <button
                        className="btn text-warning btn-act"
                        onClick={handleShow}
                    >
                        <i className="material-icons">
                            &#xE254;
                        </i>
                    </button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={
                        <Tooltip id="tooltip-disabled">
                            Delete
                        </Tooltip>
                    }>
                    <button
                        className="btn text-danger btn-act"
                        onClick={
                            () => 
                            // deleteEmployee(employee.id)
                            dispatch({
                                type: 'DELETE_EMPLOYEE',
                                id: employee.id
                            })
                        }
                    >
                        <i className="material-icons">
                            &#xE872;
                        </i>
                    </button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal-header' closeButton >
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmployee
                        employee={employee}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default Employee;
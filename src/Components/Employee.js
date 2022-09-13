import { useState, useEffect, useContext } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { EmployeeContext } from '../Contexts/EmployeeContext'
import EditEmployee from './EditEmployee';

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext)

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
                <button
                    className="btn text-warning btn-act"
                    data-toggle="modal"
                    onClick={handleShow}
                >
                    <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                    >
                        &#xE254;
                    </i>
                </button>
                <button
                    className="btn text-danger btn-act"
                    data-toggle="modal"
                    onClick={() => deleteEmployee(employee.id)}
                >
                    <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                    >
                        &#xE872;
                    </i>
                </button>
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
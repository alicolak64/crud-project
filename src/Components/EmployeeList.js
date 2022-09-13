import { useState, useEffect, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { EmployeeContext } from '../Contexts/EmployeeContext'

import 'bootstrap/dist/css/bootstrap.min.css';


import Employee from './Employee';
import AddEmployee from './AddEmployee';

const EmployeeList = () => {


    const { employees } = useContext(EmployeeContext)
    const [show, setShow] = useState(false)

    useEffect(() => {
        handleClose()
    }, [employees])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <>

            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button
                            className="btn btn-success text-white"
                            data-toggle="modal"
                            onClick={handleShow}
                        >
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map(
                            (employee) => (
                                <tr key={employee.id}>
                                    <Employee employee={employee} />
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal-header' closeButton >
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmployee
                        handleClose={handleClose}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EmployeeList;
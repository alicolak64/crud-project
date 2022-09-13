import { useState, useEffect, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { EmployeeContext } from '../Contexts/EmployeeContext'

import 'bootstrap/dist/css/bootstrap.min.css';

import Pagintaion from './Pagination';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

const EmployeeList = () => {


    const { sortedEmployees } = useContext(EmployeeContext)
    const [show, setShow] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(5)

    useEffect(() => {
        handleClose()
    }, [sortedEmployees])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const indexOfLastEmployee = currentPage * employeesPerPage
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)
    const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage)


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

                        currentEmployees.map(
                            employee => (
                                <tr key={employee.id}>
                                    <Employee employee={employee} />
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>

            <Pagintaion
                pages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentEmployeesLength={currentEmployees.length}
                sortedEmployeesLength={sortedEmployees.length}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal-header' closeButton >
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmployee />
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

export default EmployeeList;
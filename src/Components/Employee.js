import { useContext } from 'react';

import { EmployeeContext } from '../Contexts/EmployeeContext'

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext)

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



        </>

    )
}

export default Employee;
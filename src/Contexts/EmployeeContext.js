import { createContext, useReducer } from "react";

import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const initialState = [
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ]

    const reducer = (employees, action) => {

        switch (action.type) {

            case 'ADD_EMPLOYEE':

                const newAddEmployees = [...employees, {
                    id: uuidv4(),
                    name: action.employee.name,
                    email: action.employee.email,
                    address: action.employee.address,
                    phone: action.employee.phone
                }]

                localStorage.setItem('employees', JSON.stringify(newAddEmployees))

                return newAddEmployees

            case 'DELETE_EMPLOYEE':

                const newDeleteEmployees = employees.filter(employee => employee.id !== action.id)

                localStorage.setItem('employees', JSON.stringify(newDeleteEmployees))

                return newDeleteEmployees

            case 'EDIT_EMPLOYEE':

                const newEditEmployees = employees.map(employee => employee.id === action.id ? action.editedEmployee : employee)

                localStorage.setItem('employees', JSON.stringify(newEditEmployees))

                return newEditEmployees

            default:

                return employees

        }
    }

    const getEmployess = () => {
        const localEmployees = localStorage.getItem('employees')
        return localEmployees ? JSON.parse(localEmployees) : []
    }

    // const [state , dispatch] = useReducer(reducer , initialState , optinalInitalState)

    const [employees, dispatch] = useReducer(reducer, initialState, getEmployess)



    /*
    useEffect (() => {
        const localEmployees = localStorage.getItem('employees')
        setEmployees(JSON.parse(localEmployees))
    }, [])
    */

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name))

    /*
    const addEmployee = (name, email, address, phone) => {
        const newEmployees = [...employees, { id: uuidv4(), name, email, address, phone }]
        localStorage.setItem('employees', JSON.stringify(newEmployees))  
        setEmployees(newEmployees)
    }

    const deleteEmployee = (id) => {
        const newEmployees = employees.filter(employee => employee.id !== id)
        localStorage.setItem('employees', JSON.stringify(newEmployees))
        setEmployees(newEmployees)
    }

    const editEmployee = (id, editedEmployee) => {
        const newEmployees = employees.map(employee => (employee.id === id ? editedEmployee : employee))
        localStorage.setItem('employees', JSON.stringify(newEmployees))
        setEmployees(newEmployees)
    }
    */

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, dispatch }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}

export default EmployeeContextProvider;

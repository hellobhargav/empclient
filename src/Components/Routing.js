import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeData from './Employee/EmployeeData'
import AddEmployee from './Employee/AddEmployee'
import EditEmployee from './Employee/EditEmployee'
import NoPage from './NoPage/NoPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/employeeData' element={<EmployeeData />} />
            <Route path='/addemployee' element={<AddEmployee />} />
            <Route path='/editemployee/:_id' element={<EditEmployee />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}

export default Routing
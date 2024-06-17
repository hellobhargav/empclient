import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const EmployeeData = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get(`https://empserver-xumb.onrender.com/employees`)
      .then((res) => {
        setEmployees(res.data)
      })
      .catch((err) => console.log(err))
  },[])
  const deleteEmployee = (eid) => {
    axios.delete(`https://empserver-xumb.onrender.com/employees/${eid}`)
      .then(() => toast("Employee Deleted"))
      .catch((err) => console.log(err))
  }
  return (
    <div className='container p-5'>
      <ToastContainer />
      <table className=' table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.role}</td>
                <td>{employee.salary}</td>
                <td>{employee.branch}</td>
                <td>
                  <NavLink to={`/editemployee/${employee._id}`}>
                    <button className='btn btn-primary me-3'><i className="bi bi-pencil"></i></button>
                  </NavLink>
                  <button onClick={() => deleteEmployee(employee._id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeData
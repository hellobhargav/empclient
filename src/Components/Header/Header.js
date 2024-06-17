import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className=' container-fluid'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Employee Management
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/employeeData">Employee Data</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addemployee">Add Employee</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/editemployee">Edit Employee</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
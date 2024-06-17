import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditEmployee = () => {
  const { _id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [branch, setBranch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://empserver-xumb.onrender.com/employees/${_id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setRole(res.data.role);
        setSalary(res.data.salary);
        setBranch(res.data.branch);
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`https://empserver-xumb.onrender.com/employees/${_id}`, { _id, name, email, mobile, role, salary, branch })
      .then(() => {
        toast("Employee updated successfully");
        setTimeout(() => {
          navigate("/employeeData")
        }, 3000            )
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='container p-lg-5 py-5 '>
      <div className='col-10 col-lg-6 p-lg-5 py-5 p-2 shadow mx-auto'>
        <ToastContainer />
        <h1>Update Employee</h1>
        <form onSubmit={submitHandler}>
          <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Employee Name' className='form-control my-3' />
          <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Employee Email' className='form-control my-3' />
          <input type='text' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Employee Mobile' className='form-control my-3' />
          <input type='text' name='role' value={role} onChange={(e) => setRole(e.target.value)} placeholder='Employee Role' className='form-control my-3' />
          <input type='text' name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Employee Salary' className='form-control my-3' />
          <input type='text' name='branch' value={branch} onChange={(e) => setBranch(e.target.value)} placeholder='Employee Branch' className='form-control my-3' />
          <input type='submit' className='form-control my-3 btn btn-success' />
        </form>
      </div>
    </div>
  )
}

export default EditEmployee
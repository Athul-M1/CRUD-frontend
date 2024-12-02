import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addUser } from './Service.js/allAPI'


const EmpForm = () => {
    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        age: "",
        salary: "",
        designation: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { id, name, email, age, salary, designation } = user
        if (!id || !name || !email || !age || !salary || !designation) {
            alert("Please fill the form")
        }
        else {
            const response = await addUser(user)
            resetForm()
            if (response === 201) {
                alert("User added sucessully")
            }
            else {
                console.log(response)
            }
        }
    }
    const resetForm = () => {
        setuser({
            id: "",
            name: "",
            email: "",
            age: "",
            salary: "",
            designation: ""
        })
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center'>Login Form</h1>
                <div className='w-100  justify-content-center'>
                    <div className="from-box mb-5 w-75 bg-warning p-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" onChange={(e) => setuser({ ...user, id: e.target.value })} value={user.id} placeholder="Enter your id" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setuser({ ...user, name: e.target.value })} value={user.name} placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={(e) => setuser({ ...user, email: e.target.value })} value={user.email} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" onChange={(e) => setuser({ ...user, age: e.target.value })} value={user.age} placeholder="Enter your age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" onChange={(e) => setuser({ ...user, salary: e.target.value })} value={user.salary} placeholder="Enter your salary" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" onChange={(e) => setuser({ ...user, designation: e.target.value })} value={user.designation} placeholder="Enter your Designation" />
                            </Form.Group>
                            <div className='w-100 d-flex  justify-content-around'>
                                <button className='btn btn-danger' onClick={(e) => handleSubmit(e)}>Add</button>
                                <Link to={'/table'}>
                                    <button className='btn btn-danger'>See Employees</button>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpForm
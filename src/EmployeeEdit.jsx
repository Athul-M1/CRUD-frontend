import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { editUser } from './Service.js/allAPI';

const EmployeeEdit = ({data,setEditResponse}) => {
    const [updatedUser, setupdatedUser] = useState({
        id: data.id,
        name: data.name,
        email: data.email,
        age: data.age,
        salary: data.salary,  
        designation: data.designation
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate = async() => {
            const {id,name,email,age,salary,designation}=updatedUser
            if(!id || !name || !email || !age || !salary || !designation){
                alert("Please fill the form")
            }
            else{
                const response = await editUser(id,updatedUser)
                if(response.status==200){
                    setEditResponse(response)
                    handleClose()
                }
                else{
                    console.log(response)
                }
            }
    }
    return (
        <div>
            <i onClick={handleShow} class="fa-regular fa-pen-to-square"></i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><div className=''>Edit User</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" value={updatedUser.id}  placeholder="Enter your ID" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={updatedUser.name} onChange={(e)=>setupdatedUser({...updatedUser,name:e.target.value})} placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={updatedUser.email} onChange={(e)=>setupdatedUser({...updatedUser,email:e.target.value})} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" value={updatedUser.age} onChange={(e)=>setupdatedUser({...updatedUser,age:e.target.value})}placeholder="Enter your age" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" value={updatedUser.salary} onChange={(e)=>setupdatedUser({...updatedUser,salary:e.target.value})} placeholder="Enter your salary" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" value={updatedUser.designation} onChange={(e)=>setupdatedUser({...updatedUser,designation:e.target.value})} placeholder="Enter your Designation" />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default EmployeeEdit
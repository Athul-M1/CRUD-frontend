import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { deleteUser, getUser } from './Service.js/allAPI';
import EmployeeEdit from './EmployeeEdit';

const EmpTable = () => {

const [Editresponse,setEditResponse] = useState("")    
const [data,setData]=useState([])

const getUserData = async() =>{
    const response = await getUser()
    setData(response.data)
} 
const handleDelete = async(id) =>{
     await deleteUser(id)
        getUserData()
}
useEffect(()=>{
    getUserData()
},[Editresponse])

console.log(data)
    return (
        <div>
            <div className="container">
                <Table className='table table-hover mt-5 border-'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Designation</th>
                            <th>Edit</th>
                            <th>Delete</th> 
                        </tr>
                    </thead>
                    <tbody>
                       { 
                        data.map((user)=>(
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>{user.designation}</td>
                                                                {/* statelifting */}
                            <td><EmployeeEdit data={user} setEditResponse={setEditResponse} /></td> 
                            <td><i onClick={()=>handleDelete(user.id)} class="fa-solid fa-trash"></i></td>
                        </tr>
                        ))
                        }
                    </tbody>
                </Table>
                <Link to={'/form'}>
                    <button className='btn btn-dark'> Add employee</button>
                </Link>
            </div>
           
        </div>
    )
}

export default EmpTable
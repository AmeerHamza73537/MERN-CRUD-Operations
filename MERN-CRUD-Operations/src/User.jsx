import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function User(){
    const [users, setUsers] = useState([])

    // To show the data on frontend
    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(result => setUsers(result.data)) // setUsers will send the data to the state so that it can be shown on frontend
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/' + id)
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <table className="table">
                    <thead>
                        <Link to='/create' className='btn btn-success'>Add</Link>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return(
                                    <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' 
                                        onClick={(e)=> handleDelete(user._id)}>Delete</button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default User
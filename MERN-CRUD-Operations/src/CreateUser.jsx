import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreateUsers() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createUser', { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={Submit}>
                        <h2>Add User</h2>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" className="form-control"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Enter your email" className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Age</label>
                            <input type="text" placeholder="Enter your age" className="form-control"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUsers;
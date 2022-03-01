import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditAuthor = (props) => {

    const {id} = (props);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
                navigate("/authors/error");
            });
    }, [id])

const updateSubmitHandler = (e) => {
    e.preventDefault();
    const putEditedName = {
        name
    };
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, putEditedName) 
            .then((res) => {
                console.log(res.data);
                navigate("/authors");
        })
            .catch ((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
        })
}

    return(
        <div>
            <h1>Edit Your Author</h1>
            <form onSubmit={updateSubmitHandler}>
                <p>
                    <label>Name</label><br/>
                    <input value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                </p>
                {errors.name ? <span>{errors.name.message}</span> : null}
                <button  onClick={(e) => navigate("/authors")}>Edit Name</button>
            </form>
            <Link to="/authors">Home</Link>

        </div>
    )
}

export default EditAuthor;





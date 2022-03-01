import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthorForm = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
        .then((res) => {
            console.log(res.data);
            navigate("/authors")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })

    return (
        <div>
            <form onSubmit={onSubmitHandler} >

                <p>
                    <label>Name: </label>
                    <input name="name" value={name} type="text" onChange= {(e) =>setName(e.target.value)}/> 
                </p>
                {errors.name ? <span>{errors.name.message}</span> : null}
                <button>Add Author</button>
            </form>
            <p><Link to="/authors">Home</Link></p>
        </div>
    )
}
}
export default AuthorForm;
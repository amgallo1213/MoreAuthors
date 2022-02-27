import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthorForm = (props) => {
    const {authors, setAuthors} = props; 
    const [name, setName] = useState("");
    const onSubmitHandler = (e) => {
        console.log("hello");
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setAuthors([...authors, res.data]);
            navigate("/authors")
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>

                <p>
                    <label>Name: </label>
                    <input name="name" value={name} type="text" onChange= {(e) =>setName(e.target.value)}/> 
                </p>
                <button type="submit">Add Author</button>
            </form>
            <p><Link to="/authors">Home</Link></p>
        </div>
    )
}

export default AuthorForm;
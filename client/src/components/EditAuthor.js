import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditAuthor = (props) => {

    const {id} = (props);
    const [name, setName] = useState("");
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.title);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

const editHandler = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/author/${id}`, 
    {
        name
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
    })
    .catch ((err) => {
        console.log(err)
    })
}

    return(
        <div>
            <form onSubmit={editHandler}>
                <p>
                    <label>Name</label><br/>
                    <input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                </p>
                <button type="submit">Edit Name</button>
            </form>
            <Link to="/">Home</Link>

        </div>
    )
}




export default EditAuthor;





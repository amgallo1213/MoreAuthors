import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllAuthors = (props) => {
   
    const [authorList, setAuthorList] =  useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthorList(authorList.filter((author)=>author._id !== id))
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            
        {
            authorList.map((author, index) => (
                <div key={index} class="author">
                    <Link to={`/authors/${author._id}`}>
                    {author.name}
                    </Link>
                    <p><Link to ={`/authors/edit/${author._id}`}>Edit |</Link>
                    <button onClick={(e)=>deleteHandler(author._id)}>Delete</button>
                    </p>
                </div>
            ))
           
        }
        :null
            <h3>Add An Author</h3>
            <p><Link to ={`/authors/create`}>Create</Link></p>
        </div>)

}

export default AllAuthors;
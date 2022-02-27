import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllAuthors = (props) => {
   
    const [authorList, setAuthorList] =  useState([])

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

    return(
        <div>
            
        {
            authorList.map((author, index) => (
                <div key={index} class="author">
                    <Link to={`/author/${author._id}`}>
                    {author.name}
                    </Link>
                    <p><Link to ={`/author/edit/${author._id}`}>Edit |</Link>
                    <Link to ={`/author/delete/${author._id}`}> Delete</Link></p>
                </div>
            ))
        }
            <h3>Add An Author</h3>
            <p><Link to ={`/author/create`}>Create</Link></p>
        </div>)

}

export default AllAuthors;
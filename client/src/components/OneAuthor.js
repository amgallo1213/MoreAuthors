import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const OneAuthor = (props) => {
    const {id} = props;
    const [singleAuthor, setSingleAuthor] = useState({});
    console.log("OneAuthor");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setSingleAuthor(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return(
        <div>
            <header><h2>{singleAuthor.name}</h2></header>
            <p><Link to="/authors/edit/:id">Edit</Link>
            <Link to="/authors">Home</Link></p>
        </div>

        
    )

}

export default OneAuthor;
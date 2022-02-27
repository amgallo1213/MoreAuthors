import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const OneAuthor = (props) => {
    const {id} = props;
    const [singleAuthor, setSingleAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
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
            <header><h1>{singleAuthor.name}</h1></header>
            <p><Link to="/author/edit/:id">Edit</Link>
            <Link to="/authors">Home</Link></p>
        </div>

        
    )

}

export default OneAuthor;
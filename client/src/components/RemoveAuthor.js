import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const AuthorsList = (props) => {
    const { removeFromDom, author, setAuthor, id } = props;
    const deleteAuthor = ((idFromBelow) => {
        axios.delete(`http://localhost:8000/api/author/${idFromBelow}`)
            .then(res => {
                removeFromDom(res);
                console.log("removed from database")
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            {
                authors.map((author, index) => {
                return (
                    <div key={index}>
                        <Link to={`/author/${id}`}>
                            {author._id}
                        </Link>
                        <button onClick={()=>{deleteAuthor(author._id)}}>Delete</button>
                    </div>
                )}
                )
            }  
        </div> 
    )
}

export default AuthorsList;
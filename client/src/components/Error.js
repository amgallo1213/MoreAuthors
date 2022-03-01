import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Error = (props) => {


    return(

        <div>
            <p>The author you are looking for is not found. Would you like to add the author to the database?</p>
            <Link to="/authors/create">Add Your Author</Link>
            <p><Link to="/authors">Home</Link></p>
        </div>
    )

}

export default Error;
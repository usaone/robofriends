import React, { Component } from 'react';
import './Chello.css';

const Chello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Chello World!</h1>
            <p>{props.greeting}</p>
            <p className='f6'>Note: The results from this file is very similar to the results from Hello.js but compare the structure and content and be aware that React is simply working as a javascript function. Good luck!</p>
        </div>
    );
    
}

export default Chello;
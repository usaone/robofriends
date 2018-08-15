import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                <p>{this.props.greeting}</p>
                <p className='f6'>Note: The results from this file is very similar to the results from Chello.js but compare the structure and content and be aware that React is simply working as a javascript function. Good luck!</p>
            </div>
        );
    }
}

export default Hello;
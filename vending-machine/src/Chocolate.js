import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Chocolate.css'

class Chocolate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Chocolate">
                <img src="https://i.imgur.com/FAaNBc0.gif"></img>
                <Message>
                    <Link to="/"> Go Back </Link>
                </Message>
            </div>
        )
    }
}

export default Chocolate;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Chips.css'

class Chips extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Chips">
                <img src="https://media.giphy.com/media/3ohzdIq0CswpFxhwVa/giphy.gif"></img>
                <Message>
                    <Link to="/"> Go Back </Link>
                </Message>
            </div>
        )
    }
}

export default Chips;
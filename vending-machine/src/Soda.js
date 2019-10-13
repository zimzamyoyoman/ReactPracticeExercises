import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from './Message';
import './Soda.css'

class Soda extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Soda">
                <img src="https://66.media.tumblr.com/e095016111a1073901831fe2b46dfc6f/tumblr_ngufxuWmdM1rjatglo1_1280.gifv"></img>
                <Message>
                    <Link to="/"> Go Back </Link>
                </Message>
            </div>
        )
    }
}

export default Soda;
import React, { Component } from 'react';
import './VendingMachine.css';
import Message from './Message';
import { Link } from "react-router-dom";

class VendingMachine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="VendingMachine">
                <div className="VendingMachine-text">
                    <Message>
                        <h1> Hello. I am a vending machine. What would you like to eat? </h1>
                    </Message>
                    <Message>
                        <p className="VendingMachine-list">
                            <Link exact to="chips"> Chips </Link>
                            <Link exact to="soda"> Soda </Link>
                            <Link exact to="chocolate"> Chocolate </Link>
                        </p>
                    </Message>


                </div>
            </div>
        )
    }
}

export default VendingMachine;
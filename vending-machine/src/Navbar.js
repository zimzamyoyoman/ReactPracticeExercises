import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Navbar">
                <NavLink exact activeClassName="Navbar-active" to="/"> Home </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/chips"> Chips </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/soda"> Soda </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/chocolate"> Chocolate </NavLink>
            </div>
        )
    }
}

export default Navbar;
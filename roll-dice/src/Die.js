import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let face=`fas fa-dice-${this.props.face} ${this.props.rolling? "rollingAnimation":""}`
        return (
            <div className="Die">
                <i className={face}></i>
            </div >
        )
    }
}

export default Die;
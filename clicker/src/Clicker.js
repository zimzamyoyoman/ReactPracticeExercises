import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state={num: this.props.num};
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
       let number=Math.floor(Math.random()*10) + 1;
       this.setState({num: number});
    }

    render() {
        return (
            <div>
                <h1> Your number is: {this.state.num} </h1>
                { this.state.num === 7 
                ? <h1> You Win! </h1>
                : <button onClick={this.handleClick}> Click Me! </button> 
                }
            </div>
        )
    }
}

export default Clicker
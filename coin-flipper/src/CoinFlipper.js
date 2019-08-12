import React, { Component } from 'react'
import Coin from './Coin'
import './CoinFlipper.css'

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = { isHeads: null, numHeads: 0, numTails: 0, numFlips: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        let rand = Math.floor(Math.random() * 2) + 1;
        {
            rand === 1
                ? this.setState(curState => ({ isHeads: true, numHeads: curState.numHeads + 1, numFlips: curState.numFlips + 1 }))
                : this.setState(curState => ({ isHeads: false, numTails: curState.numTails + 1, numFlips: curState.numFlips + 1 }))
        }
    }

    handleClick() {
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinFlipper">
                <h1> Let's flip a coin! </h1>
                <Coin isHeads={this.state.isHeads} />
                <button onClick={this.handleClick}> Flip Me! </button>
                <p> Out of <strong> {this.state.numFlips} flips </strong>,
                    there have been <strong> {this.state.numHeads} heads </strong>
                    and <strong> {this.state.numTails} tails. </strong> </p>
            </div>
        )
    }
}

export default CoinFlipper;
import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img src={this.props.isHeads
                    ? "https://en.numista.com/catalogue/photos/inde/g2625.jpg"
                    : "https://en.numista.com/catalogue/photos/inde/g3255.jpg"
                } />
            </div>
        )
    }
}

export default Coin;
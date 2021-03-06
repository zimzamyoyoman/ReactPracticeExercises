import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 20,
        colors: [
            "#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#dfe6e9",
            "#00b894", "#00cec9", "#0984e3", "#6c5ce7", "#b2bec3",
            "#ffeaa7", "#fab1a0", "#ff7675", "#fd79a8", "#636e72",
            "#fdcb6e", "#e17055", "#d63031", "#e84393", "#2d3436",
        ]
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box Colors={this.props.colors}/>
        ));

        return (
            <div className="BoxContainer"> {boxes} </div>
        )
    }
}

export default BoxContainer;
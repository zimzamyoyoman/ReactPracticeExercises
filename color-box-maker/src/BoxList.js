import React, { Component } from 'react'
import uuid from "uuid/v4";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { brotliCompress } from 'zlib';

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = { boxList: [] };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box) {
        this.setState(st => ({
            boxList: [...st.boxList, box]
        }))
    }

    removeBox(id) {
        this.setState({
            boxList: this.state.boxList.filter(box => box.id !== id)
        })

    }

    render() {
        const boxes = this.state.boxList.map(box => (
            <Box
                key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                color={box.color}
                removeBox={this.removeBox}
            />
        ))

        return (
            <div>
                <h1> Box Maker Thingy </h1>
                <NewBoxForm addBox={this.addBox} />
                <br />
                {boxes}
            </div>
        )
    }
}

export default BoxList
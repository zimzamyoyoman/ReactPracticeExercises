import React, { Component } from 'react'
import uuid from "uuid/v4";


class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {height: "", width: "", color: ""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.addBox(newBox)
        this.setState({height: "", width: "", color: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Height"> Height </label>
                    <input
                        id="Height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor="Width"> Width </label>

                    <input
                        id="Width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor="backgroundColor"> backgroundColor </label>

                    <input
                        id="backgroundColor"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor="Submit"> Submit </label>
                    <button id="Submit"> Add A New Box! </button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm
import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';

import { Switch, Route } from 'react-router-dom';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';
import './App.css';

class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Praneet",
        age: 20,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Parag",
        age: 19,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Ayush",
        age: 20,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div class="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>

    )
  }
}

export default App;

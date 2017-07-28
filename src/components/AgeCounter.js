
import React, { Component } from 'react';

class AgeCounter extends Component {
  constructor() {
    super();
    this.state = {
      age: 10
    };
  }

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  }

  decrementAge = () => {
    this.setState({
      age: this.state.age - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Age: {this.state.age}</h1>
        <h2>Mathi bata ako age: {this.props.age}</h2>
        <button onClick={this.incrementAge}>+</button>
        <button onClick={this.decrementAge}>-</button>
      </div>
    )
  }
}

export default AgeCounter;

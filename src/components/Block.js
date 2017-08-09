import React, { Component } from 'react';
class Block extends Component
  {
    constructor() {
      super();
    }
    render()
    {
      return(
        <div className="square">
        <h3>{this.props.results}
        <br/> {this.props.desc} 
       </h3>
      </div>
      )
    }
  }
export default Block;
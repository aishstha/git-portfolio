
import React, { Component } from 'react';

import * as httpUtil from '../utils/httpUtil';

class Following extends Component
  {
    constructor()
    {
      super();
     this.state= {
      repos: []
     };
    }
componentDidMount() 
    {
  httpUtil.get('https://api.github.com/users/aishwaryashrestha11').then(response => {
      this.setState({
        repos: response.data
      });
    });
    }

    render()
    {
      return(
        
        <div className="square">
        {
            <h3>
        {this.state.repos.following}<br/>
        Following
        </h3>
        }
        
        </div>
        
      )
    }
  }
export default Following;
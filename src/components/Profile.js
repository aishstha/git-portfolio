import React, { Component } from 'react';
import './Profile.css'

import * as httpUtil from '../utils/httpUtil';

class Profile extends Component
  {
    constructor()
    {
      super();
     this.state= {
      repos: ''
     };
    }

componentDidMount() 
    {
  httpUtil.get('https://api.github.com/users/aishwaryashrestha11').then(response => {
      console.log(response);
      this.setState({
        repos: response.data
      });
    });
    }
    
    render()
    {
      return(
        <div className="Username">
        {
            <h3>{this.state.repos.login}
        </h3>
        
        }
      </div>
        
      )
    }
  }
export default Profile;
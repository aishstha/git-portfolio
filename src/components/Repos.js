import React, { Component } from 'react';

import * as httpUtil from '../utils/httpUtil';

class Repos extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    console.log('Ma mount huna lage');
  }

  componentDidMount() {
    console.log('Ma mount bhae');

    httpUtil.get('https://api.github.com/users/aishwaryashrestha11/repos').then(response => {
      this.setState({
        repos: response.data
        
      });
    }); 
  httpUtil.get('https://api.github.com/users/aishwaryashrestha11/followers').then(response => {
      this.setState({
        repos: response.data
        
      });
    });
  }

  render() {
    console.log('ma render hudai chu');

    return (
      <div>
        {
          this.state.repos.map(repo => {
            return (
              <h3 key={repo.id}>{repo.name}</h3>
            );
          })
        }
      </div>
    );
  }
}

export default Repos;
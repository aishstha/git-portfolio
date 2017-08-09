import React, {
  Component
} from 'react';
import Profile from './Profile';
import Block from './Block';
import Following from './Following';
import RepositoryNumber from './RepositoryNumber';
import Profilepicture from './Profilepicture';
import Repos from './Repos';
import * as httpUtil from '../utils/httpUtil';


class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      followe: ''
    };
  }
GEThttps://community-hacker-news-v1.p.mashape.com/item/{id}.json?print=pretty

  componentDidMount() {
    httpUtil.get('https://api.github.com/users/aishwaryashrestha11').then(response => {
      this.setState({
        followe: response.data
      });
    });
  }
  
  increment = () => {
    this.setState({
      followe: this.state.followe + 1
    });
  }

  render() {
    return ( 
      <div className = "Wrapper" >
      <Profilepicture / >

      <Profile / >
      <div className = "block" >
        <Block results = {this.state.followe.followers} desc="Followers" />
      
        <Block results = {this.state.followe.following} desc="Following"/>
        <Block results = {this.state.followe.public_repos} desc="Repo"/>
      </div> 
      <div className="panel">  
        <h2>Repository Name</h2>
      
        <Repos / >
      </div>
      </div >
    )

  }

}
export default Wrapper;

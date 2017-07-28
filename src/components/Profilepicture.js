import React, {
  Component
} from 'react';
import './Wrapper.css';


import * as httpUtil from '../utils/httpUtil';

class Profilepicture extends Component {
  constructor() {
    super();
    this.state = {
      pic: {}
    };
  }

  componentDidMount() {
    httpUtil.get('https://api.github.com/users/aishwaryashrestha11').then(response => {
      this.setState({
        pic: response.data
      });
    });
  }
  render() {
    console.log('from pp');
    return (

      <
      div className = "profile-pic" >
      <
      img src = {
        this.state.pic.avatar_url || ''
      }
      />
      </div>

    );
  }
}
export default Profilepicture;

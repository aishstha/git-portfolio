import React, { Component } from 'react';
import './App.css';
import './Wrapper.css';
import './Profile.css';
import Wrapper from './Wrapper';
import Profile from './Profile';


import Repos from './Repos';
import AgeCounter from './AgeCounter';

// Things to study
// - State
// - this.setState()
// - Props 
// - Component lifecycle (componentWillMount, componentDidMount, ....)
// - .map
// - Rendering elements
// - keys

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <AgeCounter age="20" />
//        <AgeCounter age="adsfasdfa" />
//        <AgeCounter />
//        <AgeCounter />
//
//        <Repos />
//      </div>
//    );
//  }
//}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
      </div>
    );
  }
}

export default App;

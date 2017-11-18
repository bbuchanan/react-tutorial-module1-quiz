import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName: 'billb'
  }

  onNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.userName} changed={this.onNameChangeHandler}></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;

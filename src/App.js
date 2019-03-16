import React, { Component } from 'react';
import logo from './logo.png';
import octocat from './Octocat.png'
import './App.css';
import { 
  Dialog
} from './components/Index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Omni</h1>
        <h2>Make learning friends worldwide</h2>
        <h2>Built in translation features make chatting easy</h2>
        <h2>Find halfway points by price or attractions</h2>
        <h2>Have a learning adventure!</h2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Dialog />
          <a
            className="App-link"
            href = "https://github.com/SammoMichael/omni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={octocat} className="octocat" alt="github repo"/> 
          </a>
        </header>
      </div>
    );
  }
}

export default App;

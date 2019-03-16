import React, { Component } from 'react';
import logo from './logo.png';
import octocat from './Octocat.png'
import './App.css';
import { 
  Dialog,
  MapContainer,
} from './components/Index';
var unirest = require('unirest');
unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm")
  .header("X-RapidAPI-Key", "8f1774236cmsh7d5203464b386dcp1ced4cjsnd78e4dc5e2a8")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
class App extends Component {
  
  render() {
      var location = {
      lat: "-1.2884",
      lng: "36.8233"
    }
      var location2 = {
      lat: "-1.2884",
      lng: "25.8233"
    }
    return (
      <div className="App">
        <header className="greeting">
        <h1>Welcome to Omni</h1>
        <h2>Make learning friends worldwide</h2>
        <h2>Built in translation features make chatting easy</h2>
        <h2>Find halfway points by price or attractions</h2>
        <h2>Have a learning adventure!</h2>
      </header>
        <h2 className="map-labels"><span className="label">Your Location</span> <span className="label"></span>Your Adventure<span className="label">Their Location</span></h2>
        
        <div className="mapbox">
        <section className="map1"><MapContainer 
          className="map1"
          id="map2"
          props={location}  /></section>
        <section className="map1"><MapContainer 
          className="map3"
          id="map3"
          props={location} location2={location2}/></section>
        <section className="map2"><MapContainer
          className="map2" 
          id="map2"
          props={location2} /></section></div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <br />
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

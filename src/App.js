import React, { Component } from 'react';
import logo from './logo.png';
import octocat from './Octocat.png'
import './App.css';
import { 
  Dialog,
  MapContainer,
} from './components/Index';
var unirest = require('unirest');
unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/JFK-sky/BNA-sky/2019-03-25?inboundpartialdate=2019-04-01")
.header("X-RapidAPI-Key", "8f1774236cmsh7d5203464b386dcp1ced4cjsnd78e4dc5e2a8")

class App extends Component {
  
  render() {
      var location = {
        lat: 38.745126009439176,
         lng: -78.32342376891687
      // lat: "13.736717", /* paris */
      // lng: "100.523186"
      // lat: "48.864716", /* paris */
      // lng: "2.349014"
    }
      var location2 = {
        lat: '37',
        lng: '-122'
      // lat: "55.751244", /* berlin */
      // lng: "37.618423"
      // lat: "52.520008", /* berlin */
      // lng: "13.404954"
    }
    return (
      <div className="container">
        <header className="greeting">
        <br />
        <h1>Welcome to Omni</h1>
        <h2>Make learning friends worldwide</h2>
        <h2>Built in translation features make chatting easy</h2>
        <h2>Find halfway points by price or attractions</h2>
        <h2>Have a learning adventure!</h2>
      </header>
        <hr />
        <h2 className="map-labels"><span className="label">Your Location: NEW YORK</span> <span className="label"></span>Your Adventure: <a href="https://www.tripadvisor.com/Tourism-g55229-Nashville_Davidson_County_Tennessee-Vacations.html">NASHVILLE</a> <span className="label">Their Location: SAN FRANCISCO</span></h2>
        <br />
        <hr />
        <div className="mapbox">
        <div className="map1"><MapContainer 
          className="map1"
          id="map2"
          location={location}  /></div>
        <div className="map1"><MapContainer 
          className="map3"
          id="map3"
          location={location} location2={location2}/></div>
        <div className="map2"><MapContainer
          className="map2" 
          id="map2"
          location={location2} /></div>
          </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <br />
            <div>Flight: 268 Round Trip </div>
            <br/>
            <div> <a href="https://www.tripadvisor.com/AttractionProductReview-g55229-d11448482-Country_Music_Hall_of_Fame_and_Museum_Admission-Nashville_Davidson_County_Tennessee.html">Recommended: Country Music Hall of Fame and Museum</a> </div>
            <Dialog className='dialog' />
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

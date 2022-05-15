import React, { Component } from 'react';
import logo from '../assets/images/selfie.jpeg';
import AboutMe from './AboutMe'
import FeatProj from './FeatProj'
import FeatJob from './FeatJob'
import FactsNFigures from './FactsNFigures'
import CodingLangs from './CodingLangs'
import ContactMe from "./ContactMe";

class App extends Component {
    render() {
      function valCheck() {
        var remember = document.getElementById("slider");
        var borapp = document.getElementById("borapp")
        if (remember.checked) {
          console.log("checked");
          borapp.classList.add('hidden');
        } else {
          console.log("You didn't check it! Let me check it for you.");
          borapp.classList.remove('hidden');
        }
      }
        return (
            <div className="App" >
            <header className="App-header">
              <label class="switch">
              <input type="checkbox" id="slider" onClick = {valCheck}></input>
              <span class="slider round"></span>
            </label>
            
            <h1 className="App-title">NOELLE PHANSALKAR</h1>
            <h2 className="App-title">fullstack software engineer</h2>
              <CodingLangs></CodingLangs>
            </header>
            <div className="MainBody" id ="borapp">
            <img src={logo} className="App-logo" alt="logo" />
             <AboutMe></AboutMe>
             <FeatProj></FeatProj>
            <ContactMe></ContactMe>
            <FeatJob></FeatJob>
             <FactsNFigures></FactsNFigures>
             
            <p className="made">made with: React | HTML | JSX | CSS </p>
            </div>
            
          </div>
        );
    }
} 

export default App;

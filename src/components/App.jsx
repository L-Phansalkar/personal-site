import React, { Component } from 'react';
import logo from '../assets/images/selfie.jpeg';
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import FeatProj from './FeatProj'
import FeatJob from './FeatJob'
import FactsNFigures from './FactsNFigures'
import CodingLangs from './CodingLangs'

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <h1 className="App-title">NOELLE PHANSALKAR</h1>
            <h2 className="App-title">fullstack software engineer</h2>
              <CodingLangs></CodingLangs>
            </header>
            <div className="MainBody">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="ABM">
             <AboutMe></AboutMe>
             </p>
             <p className="FTP">
             <FeatProj></FeatProj>
             </p>
             <p className="FTJ">
             <FeatJob></FeatJob>
            </p>
            <p className="CTM">
             <ContactMe></ContactMe>
            </p>
            <p className="FAF">
             <FactsNFigures></FactsNFigures>
            </p>
            </div>
          </div>
        );
    }
} 

export default App;

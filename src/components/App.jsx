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
        return (
            <div className="App">
            <header className="App-header">
            <h1 className="App-title">NOELLE PHANSALKAR</h1>
            <h2 className="App-title">fullstack software engineer</h2>
              <CodingLangs></CodingLangs>
            </header>
            <div className="MainBody">
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

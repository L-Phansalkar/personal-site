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
        var funapp = document.getElementById("funapp")
        var myname = document.getElementById("myname");
        var mytitle = document.getElementById("mytitle")
        if (remember.checked) {
          borapp.classList.add('hidden');
          funapp.classList.remove('hidden');
          myname.innerText = "L PHANSALKAR(they/them)"
          mytitle.innerText = "fullstack software engineer && queer coder interested in queercoding"
        } else {
          funapp.classList.add('hidden');
          borapp.classList.remove('hidden');
          myname.innerText = "NOELLE PHANSALKAR"
          mytitle.innerText = "fullstack software engineer"
        }
      }
        return (
            <div className="App" >
            <header className="App-header">
              <label class="switch">
              <input type="checkbox" id="slider" onClick = {valCheck}></input>
              <span class="slider round"></span>
            </label>
            <h1 className="App-title" id= "myname">NOELLE PHANSALKAR</h1>
            <h2 className="App-title" id = "mytitle">fullstack software engineer</h2>
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
            <div className="FunBody" id ="funapp" class ="hidden">
            <h1>hi there! i'm updating my personal site: more to come soon!</h1>
            </div>
          </div>
        );
    }
} 

export default App;

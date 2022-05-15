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
        var header= document.getElementById("appheader")

        if (remember.checked) {
          borapp.classList.add('hidden');
          funapp.classList.remove('hidden');
          document.body.style.backgroundColor = "peru";
          header.style.backgroundColor = "pink"
          document.body.style.color = "black"
          myname.innerText = "L PHANSALKAR(they/them)"
          mytitle.innerText = "fullstack software engineer && queer coder interested in queercoding"
        } else {
          funapp.classList.add('hidden');
          borapp.classList.remove('hidden');
          document.body.style.backgroundColor = "#4a6c8e";
          header.style.backgroundColor = "#0c2036"
          document.body.style.color = "white"
          myname.innerText = "NOELLE PHANSALKAR"
          mytitle.innerText = "fullstack software engineer"
        }
      }
        return (
            <div className="App" >
            <header className="App-header" id="appheader">
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
              <div class="triangle-down">
              hi there! i'm updating my personal site: more to come soon!
              </div>
            <p className="made">made with: React | HTML | JSX | CSS </p>
            </div>
          </div>
        );
    }
} 

export default App;

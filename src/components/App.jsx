import React, { Component } from 'react';
import logo from '../assets/images/selfie.jpeg';
import togo from '../assets/images/profeshi.jpg'

import AboutMe from './AboutMe'
import FeatProj from './FeatProj'
import FeatJob from './FeatJob'
import FactsNFigures from './FactsNFigures'
import CodingLangs from './CodingLangs'
import ContactMe from "./ContactMe";

import Intro from './Intro'
import FunProj from './FunProjects'

class App extends Component {
    render() {
      function valCheck() {
        var remember = document.getElementById("slider");
        var borapp = document.getElementById("borapp")
        var funapp = document.getElementById("funapp")
        var myname = document.getElementById("myname");
        var mytitle = document.getElementById("mytitle")
        var header= document.getElementById("appheader")
        var flag = document.getElementById("flag")
        var hili = document.getElementById("hili")

        if (remember.checked) {
          // for the fun app
          
          borapp.classList.add('hidden');
          funapp.classList.remove('hidden');
          document.body.style.backgroundColor = "black";
          document.body.style.backgroundImage = "url('https://wfmu.org/Gfx/user_images/agif5_5112702990073496.gif')";
          header.style.backgroundColor = "pink"
          flag.style.backgroundColor = "white"
          hili.style.backgroundColor = "white"
          document.body.style.color = "black"
          myname.innerText = "L PHANSALKAR(they/them)"
          mytitle.innerText = "fullstack software engineer && queer coder interested in queercoding"
        } 
        
        else {
          // for the homepage/ boring app
          flag.style.backgroundColor = "";
          hili.style.backgroundColor = "rgba(255, 255, 0, 0.618)";
          borapp.classList.remove('hidden');
          funapp.classList.add('hidden');
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
            <div id ="flag">
            <h1 className="App-title" id= "myname">NOELLE PHANSALKAR</h1>
            <h2 className="App-title" id = "mytitle">fullstack software engineer</h2>
            </div>
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
            <div className = "funbox">
              <img src={togo} className="App-togo" />
              <div className = "temp">
              <h1>hi there! i'm updating my personal site: more to come soon!</h1>
              </div>
              <Intro></Intro>
              <ContactMe></ContactMe>
              <FunProj></FunProj>
              </div>
            <p className="made" >made with: React | HTML | JSX | CSS </p>
            </div>
          </div>
        );
    }
} 
export default App;

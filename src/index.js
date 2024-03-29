import React from "react";
import ReactDOM from "react-dom";

// this is what gives the circles their changing colors
import AnimatedBg from "react-animated-bg";

// these are the react components
import AboutMe from "./components/AboutMe";
import CodingLangs from "./components/CodingLangs";
// import VennDiagram from "./components/Venn";
import ECommerce from "./components/E-Commerce";
import PrideApi from "./components/PrideApi";
import HaceGropper from "./components/HaceGropper";
import Achievements from "./components/Achievements";
import Learning from "./components/Learning";

// these are the header icons
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";

//style
import "./assets/styles/style.css";

export default class App extends React.Component {
  state = {
    topStyl: {
      opacity: 1,
      filter: `drop-shadow(0px 0px 10px #FFD700)`,
    },
    midStyl: {
      opacity: 0.5,
      filter: "",
    },
    botStyl: {
      opacity: 0.5,
      filter: "",
    },
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 300) {
      this.setState({
        topStyl: {
          opacity: 0.5,
          filter: "",
        },
      });
      this.setState({
        midStyl: {
          opacity: 1,
          filter: ` drop-shadow(30px 10px 4px  #2a2929)`,
        },
      });
    } else {
      this.setState({
        topStyl: {
          opacity: 1,
          filter: `drop-shadow(0px 0px 10px #FFD700)`,
        },
      });
      this.setState({
        midStyl: {
          opacity: 0.5,
          filter: "",
        },
      });
    }
    if (window.scrollY > 1000) {
      this.setState({
        midStyl: {
          opacity: 0.5,
          filter: "",
        },
      });
      this.setState({
        botStyl: {
          opacity: 1,
          filter: `drop-shadow(0px 0px 10px #0c62ed)`,
        },
      });
    } else {
      this.setState({
        botStyl: {
          opacity: 0.5,
          filter: ``,
        },
        midStyl: {
          opacity: 1,
          filter: ` drop-shadow(30px 10px 4px  #2a2929)`,
        },
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <div id="root">
        {/* this is the header */}
        <div id="icon">
          <a href="https://github.com/L-Phansalkar" target="_blank">
            <AiFillGithub size={60} />
          </a>
          <a href="https://www.linkedin.com/in/lphansalkar/" target="_blank">
            <AiFillLinkedin size={60} />
          </a>
          <br></br>
          <a href="mailto:n.e.phansalkar@gmail.com" target="_blank">
            <AiTwotoneMail size={60} />
          </a>
          <a
            href="https://drive.google.com/file/d/1GJ45U2wdsBA6gJg2KbGkL7f-CGWHKaas/view?usp=sharing"
            target="_blank"
          >
            <GrDocumentUser size={60} />
          </a>
        </div>
        <div id="text">
          <section>
            <div className="content">
              <h2>L Phansalkar</h2>
              <h2>L Phansalkar</h2>
            </div>
          </section>
        </div>
        {/* this is the first, v large circle */}
        <AnimatedBg
          style={this.state.topStyl}
          colors={[
            "#bdc7d9",
            "#47a2f7",
            "#beddea",
            "#909bf2",
            "#5cc4e4",
            "#89a2ec",
            "#84afc1",
            "#5babec",
            "#9ba5b6",
            "#7ab0e1",
            "#bcc5eb",
            "#7aa0d3",
            "#93cbf2",
            "#a6aade",
            "#8fa6c8",
          ]}
          duration={5}
          delay={2}
          timingFunction="ease-out"
          className="animated-section"
          id="top1"
          randomMode
        >
          <div className="App">
            <h1>
              full stack <br></br>javascript <br></br> software engineer
            </h1>
            open to full stack or frontend software engineering roles
            <AboutMe></AboutMe>
            <CodingLangs></CodingLangs>
            <br></br>~scroll for~
            <h1>PROJECTS</h1>
          </div>
        </AnimatedBg>
        {/* this is the next line of three cricles for projects */}
        <div id="threecircles">
          <AnimatedBg
            style={this.state.midStyl}
            colors={[
              "#7ce2d8",
              "#edaab4",
              "#63d1e7",
              "#e8b594",
              "#74aff3",
              "#afc38a",
              "#e1b0dd",
              "#98d4ac",
              "#bcb8ec",
              "#d4f1bf",
              "#a2bfe9",
              "#dace9d",
              "#7cc9ef",
              "#7cbeb4",
              "#a7e4e0",
            ]}
            duration={5}
            delay={2}
            timingFunction="ease-out"
            className="animated-section"
            id="circle"
            randomMode
          >
            <PrideApi></PrideApi>
          </AnimatedBg>

          <AnimatedBg
            style={this.state.midStyl}
            colors={[
              "#7ce2d8",
              "#edaab4",
              "#63d1e7",
              "#e8b594",
              "#74aff3",
              "#afc38a",
              "#e1b0dd",
              "#98d4ac",
              "#bcb8ec",
              "#d4f1bf",
              "#a2bfe9",
              "#dace9d",
              "#7cc9ef",
              "#7cbeb4",
              "#a7e4e0",
            ]}
            duration={5}
            delay={2}
            timingFunction="ease-out"
            className="animated-section"
            id="three"
            randomMode
          >
            <ECommerce></ECommerce>
          </AnimatedBg>

          <AnimatedBg
            style={this.state.midStyl}
            colors={[
              "#7ce2d8",
              "#edaab4",
              "#63d1e7",
              "#e8b594",
              "#74aff3",
              "#afc38a",
              "#e1b0dd",
              "#98d4ac",
              "#bcb8ec",
              "#d4f1bf",
              "#a2bfe9",
              "#dace9d",
              "#7cc9ef",
              "#7cbeb4",
              "#a7e4e0",
            ]}
            duration={5}
            // delay={2}
            timingFunction="ease-out"
            className="animated-section"
            id="four"
            randomMode
          >
            <HaceGropper></HaceGropper>
          </AnimatedBg>
        </div>
        {/* <VennDiagram></VennDiagram> */}

        {/* this is the third row - the one with venn diagram and two smol */}
        {/* this is the opening tag of the box for the entire third row */}
        <div id="thirdrow">
          {/* this is the div and text for the central overlapping circle  */}
          <div id="topofvenn">
            <h3>exploration</h3>
            <h3>collaboration</h3>
            <h3>growth</h3>
            <h3>revolution</h3>
          </div>
          {/* this is the opening tag of the box for the entire venn diagram */}
          <div id="venndia">
            {/* this is the opening tag of the box for the top two circles */}
            <div id="vennrow">
              <AnimatedBg
                colors={[
                  "#2d2134",
                  "#5f2cc3",
                  "#190b1f",
                  "#4431a5",
                  "#514864",
                  "#752094",
                  "#1d1d3c",
                  "#742e82",
                  "#2d163c",
                  "#403e8f",
                  "#40114d",
                  "#66477d",
                  "#2b1266",
                  "#543266",
                  "#1f1c53",
                ]}
                duration={5}
                delay={2}
                timingFunction="ease-out"
                // className="animated-section"
                id="ven1"
                randomMode
              >
                <div className="App">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2>EDUCATION</h2>
                </div>
              </AnimatedBg>

              <AnimatedBg
                colors={[
                  "#2d2134",
                  "#5f2cc3",
                  "#190b1f",
                  "#4431a5",
                  "#514864",
                  "#752094",
                  "#1d1d3c",
                  "#742e82",
                  "#2d163c",
                  "#403e8f",
                  "#40114d",
                  "#66477d",
                  "#2b1266",
                  "#543266",
                  "#1f1c53",
                ]}
                duration={5}
                delay={2}
                timingFunction="ease-out"
                // className="animated-section"
                id="ven2"
                randomMode
              >
                <div className="App">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2>TECHNOLOGY</h2>
                </div>
              </AnimatedBg>

              {/* this is the closing tag of the box for the top two circles */}
            </div>

            <AnimatedBg
              colors={[
                "#2d2134",
                "#5f2cc3",
                "#190b1f",
                "#4431a5",
                "#514864",
                "#752094",
                "#1d1d3c",
                "#742e82",
                "#2d163c",
                "#403e8f",
                "#40114d",
                "#66477d",
                "#2b1266",
                "#543266",
                "#1f1c53",
              ]}
              duration={5}
              delay={2}
              timingFunction="ease-out"
              // className="animated-section"
              id="ven3"
              randomMode
            >
              <div className="App">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2> ART </h2>
              </div>
            </AnimatedBg>

            {/* this is the closing tag of the box for the bottom circle */}
          </div>

          {/* this is the opening tag of the box for the right (vertical) two circles */}
          <div id="thirdrowfeature">
            <AnimatedBg
              style={this.state.botStyl}
              colors={[
                "#ecb297",
                "#e9e031",
                "#f46a39",
                "#eadc7e",
                "#e88568",
                "#e3bd34",
                "#bf9178",
                "#e79026",
                "#afa15d",
                "#e08f47",
                "#b6a33b",
                "#c89369",
                "#d7a244",
                "#e7c488",
                "#d1965a",
              ]}
              duration={5}
              delay={2}
              timingFunction="ease-out"
              className="animated-section"
              id="threetwo"
              randomMode
            >
              <Achievements></Achievements>
            </AnimatedBg>

            <AnimatedBg
              style={this.state.botStyl}
              colors={[
                "#ecb297",
                "#e9e031",
                "#f46a39",
                "#eadc7e",
                "#e88568",
                "#e3bd34",
                "#bf9178",
                "#e79026",
                "#afa15d",
                "#e08f47",
                "#b6a33b",
                "#c89369",
                "#d7a244",
                "#e7c488",
                "#d1965a",
              ]}
              duration={5}
              delay={2}
              timingFunction="ease-out"
              className="animated-section"
              id="threethree"
              randomMode
            >
              <Learning></Learning>
            </AnimatedBg>

            {/* this is the closing tag of the box for the right hand feature (two circles) */}
          </div>

          {/* this is the closing tag of the box for the whole third row */}
        </div>

        {/* this is the closing tag of the root */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

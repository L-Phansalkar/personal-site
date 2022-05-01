import React, { Component } from 'react';
class FactsNFigures extends Component {
    render() {
        
        return (
            <div className="Facts">
                <h3>Facts & Figures</h3>
                <div className="Factbox">
                <div class="container">
                <input type="radio" name="nav" id="first" checked/>
                <input type="radio" name="nav" id="second" />
                <input type="radio" name="nav" id="third" />
  
                <label for="first" class="first"></label>
                <label for="second"  class="second"></label>
                <label for="third" class="third"></label>
 
  <div class="one slide">
    <blockquote>
      He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. 
    </blockquote>
    <h2>Supervisor</h2>
    <h3>92Y Camps</h3>
  </div>
  
  <div class="two slide">
    <blockquote>
 He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project.
    </blockquote>
    <h2>John Doe</h2>
    <h3>Developer Relations at Woof Studios</h3>
  </div>
  
  <div class="three slide">
    <blockquote>
    He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again.
    </blockquote>
    <h2>Steve Stevenson</h2>
    <h3>CEO Woof Web Design Studios</h3>
  </div>
    </div>
 </div>
 </div>
)}
}
export default FactsNFigures
import React, { Component } from 'react';
class FeatProj extends Component {
    render() {
        return (
            <div className="FeatProj">
                <h3>Featured Projects</h3>
                <p className= 'hg'>
                    <b><u>Hace Gropper (team of 4)</u></b>
                    <br></br>
                    tech stack: JavaScript | Phaser | HTML | CSS | DOM | TypeScript
                    <br></br>
                    an educational web app about women in STEM 
                    <br></br>
                    -> collaborated with team of software engineers to create and code the main (lobby) map, sprite(game character)
                    <br></br>
                    -> individually created and coded one of five maps (Phaser, JavaScript) and one of four mini-games (HTML, CSS, DOM) 
                    <br></br>
                    -> headed team windows.localStorage implementation to store user progress and CSS flexbox for consistent design across maps
                    <br></br>
                    <b>VIDEO:</b><a href="javascript:window.open('https://youtu.be/DnS9-V94hpg','mypopuptitle','width=600,height=400')">click here</a>
                </p>
                <p className= 'gs'>
                    <b><u>E-commerce Site </u></b>
                    <br></br>
                    tech stack: JavaScript | React | Redux | PostgreSQL | HTML | CSS
                    <br></br>
                    a full stack e-commerce web app with CRUD capabilities
                    <br></br>
                    <b>VIDEO:</b><a href="javascript:window.open('https://youtu.be/iLrIX4BYP6o','mypopuptitle','width=600,height=400')">click here</a>
                </p>
            </div>
            )}
}
export default FeatProj
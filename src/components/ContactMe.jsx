import React, { Component } from 'react';
class ContactMe extends Component {
    render() {
        return (
            <div className="ContactMe">
                <h3><b>CONTACT ME:</b></h3> 
                <form method="post" name="contact_form"
                action="contact-form-handler.php">
            Your Name:
         <input type="text" name="name"></input>

            <br></br>Your Email Address:
        <input type="text" name="email"></input>

        <br></br>Your Message:
     <textarea name="message"></textarea>
    <input type="submit" value="Submit"></input>
    </form>	
    <h3><b>email: n.e.phansalkar@gmail.com</b></h3> 
            </div>
)}}
export default ContactMe
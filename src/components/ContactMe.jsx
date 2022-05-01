import React, { Component } from 'react';
class ContactMe extends Component {
 formSubmit(e) {
    var form = document.getElementById("form");
form.addEventListener("submit", formSubmit(e));
    e.preventDefault();
    const formData = new FormData();
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'email',
        document.querySelector('input[name="email"]').value
    )
    console.log(formData)

    fetch("https://getform.io/f/c916d79d-8d4f-49f6-bcd4-a3b794520b50", {
            method: "POST",
            body: formData,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
    render() {
        return (
            <div className="ContactMe">
                <h3><b>CONTACT ME:</b></h3> 
                <html>
                <form id="fcf-form-id" class="fcf-form-class" method="post" action="./contact-form-process.php"> </form>
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
            </div>
        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
            </div>
        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>
        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
        </div>
        </div>
        </html>
        <h3><b>email: n.e.phansalkar@gmail.com</b></h3> 
</div>

)}}
export default ContactMe
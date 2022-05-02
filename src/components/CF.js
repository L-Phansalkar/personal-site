import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/db0d1650-c999-11ec-a557-034a17e2da28";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        Name: <input type="text" placeholder="Your name" name="name" required />
      </div>
      <br></br>
      <div>
        Email: <input type="email" placeholder="Email" name="email" required />
      </div>
      <br></br>
      <div>
        <textarea
          rows="10"
          placeholder="Your message"
          name="message"
          required
        />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;

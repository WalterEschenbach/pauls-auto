import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const url = "http://localhost:5000/mailer"; //

    fetch(`${url}`, {
      method: "POST",
      mode: "no-cors", // no-cors, cors, *same-origin
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((name) => console.log(name))
      .then((res) => res.json())
      .then((res) => console.log(res.body))
      .catch((err) => console.log("error"));
  };

  const onSubmit = () => {
    sendEmail();
    console.log(name, "form data");
  };

  const setName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input
          className="name"
          type="text"
          placeholder="Name"
          name="Name"
          ref={register({ required: true })}
          value={name}
          onChange={setName}
        />
        <br />
        <input
          className="email"
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true })}
          onChange={handleChange}
        />
        <br />
        <input
          className="tel"
          type="tel"
          placeholder="Mobile number"
          name="Mobile number"
          ref={register({ required: true })}
          onChange={handleChange}
        />
        <br />
        <textarea
          className="message"
          name="Message"
          ref={register({ required: true, maxLength: 500 })}
          onChange={handleChange}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;

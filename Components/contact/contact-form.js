import classes from "./contact-form.module.css";
import { useRef, useState } from "react";

const ContactForm = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredMessage ||
      enteredMessage.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const messageData = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    }

    props.onAddMessage(messageData);

    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    messageInputRef.current.value = "";
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" ref={messageInputRef} />
          </div>
          {isInvalid && <p>Please enter a valid input!</p>}
          <div className={classes.actions}>
            <button>Send message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

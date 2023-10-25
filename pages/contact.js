import ContactForm from "../Components/contact/contact-form";
import { useContext } from "react";
import NotificationContext from "../store/notification-context";
import Head from "next/head";
const ContactPage = () => {
  const notificationCtx = useContext(NotificationContext)

  const addMessageHandler = (messageData) => {

    notificationCtx.showNotification({
      title: 'Working...',
      message: 'Sending a message',
      status: 'pending'
    })
    
    fetch('api/contact/', {
      method: 'POST',
      body: JSON.stringify(messageData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return response.json().then((data) => {
        throw new Error(data.message || 'Something went wrong') // catch 400 and 500 error status
      })
    })
    .then((data) => {
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully sent a message',
        status: 'success'
      })
    })
    .catch(error => {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong',
        status: 'error'
      })
    })
    
  };

  return (
    <>
        <Head>
          <title>Contact me</title>
          <meta name="description" content="Send me your message"></meta>
        </Head>
       <ContactForm onAddMessage={addMessageHandler}/>
    </>
  );
};

export default ContactPage;

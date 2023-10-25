import { useEffect, useState } from "react";
import classes from './messageItem.module.css'
const MessageItem = () => {

    const [allMessages, setAllMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
    setIsLoading(true)
    fetch('/api/contact/')
    .then((response) => response.json())
    .then((data) => {
        setAllMessages(data.messages)
        console.log(data.message)
        setIsLoading(false)
    })
   }, [])

   if (isLoading) {
    return <div className={classes.loader}></div>

   }

  return (
    <>
    <h1 className={classes.title}>All messages</h1>
    <ul className={classes.items}>
      {allMessages.map((message) => (
        <li key={message._id} className={classes.item}>
          <h3>{message.name}</h3>
          <p>{message.message}</p>
        </li>
      ))}
    </ul>
    </>
  );
};

export default MessageItem;

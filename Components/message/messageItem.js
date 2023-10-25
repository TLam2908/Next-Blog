import { useEffect, useState } from "react";
const MessageItem = () => {

    const [allMessages, setAllMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
    fetch('/api/contact/')
    .then((response) => response.json())
    .then((data) => {
        setAllMessages(data.messages)
        console.log(allMessages)
    })

   }, [])

  return (
    <ul>
      {allMessages.map((message) => (
        <li key={message._id}>
          <h1>{message.name}</h1>
          <p>{message.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageItem;

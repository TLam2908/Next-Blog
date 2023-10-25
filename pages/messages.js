import MessageItem from "../Components/message/messageItem";
import Head from "next/head";
const MyMessage = () => {
  return (
    <>
      <Head>
        <title>All messages</title>
        <meta name="description" content="All messages"></meta>
      </Head>
      <MessageItem />
    </>
  );
};

export default MyMessage;

import { connectDB, getData, insertData } from "../../lib/db-util";

async function handler(req, res) {
    let client;
    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed" });
      return;
    }
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
    }

    const inputMessage = {
      email: email,
      name: name,
      message: message,
    };

    try {
      const result = await insertData(client, "contacts", inputMessage);
      inputMessage._id = result.insertId;
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed" });
      return;
    }
    res.status(201).json({ message: "Contact sended" });
  }
  if (req.method === "GET") {
    try {
      const allMessages = await getData(client, 'contacts', {
        _id: -1,
      });
      res.status(200).json({ messages: allMessages, message: 'Success take messages' });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }
  client.close()
}

export default handler

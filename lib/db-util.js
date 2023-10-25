import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.whakwdj.mongodb.net/${process.env.mongodb_database}`

export async function connectDB () {
    const client = await MongoClient.connect(connectionString)
    return client
}

export async function insertData (client, collection, data) {
    const db = client.db()
    const result = await db.collection(collection).insertOne(data)
    return result
}

export async function getDocuments (client, collection, sort) {
    const db = client.db()
    const documents = await db.collection(collection).find().sort(sort).toArray()
    return documents
}


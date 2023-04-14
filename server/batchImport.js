const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("WritersBlock");
    console.log("connected!");

    const result = await db.collection("Users").insertOne({test: "test"});

  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("disconnected!");
};

batchImport();

//module.exports = batchImport;

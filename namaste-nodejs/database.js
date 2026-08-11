const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://db_user:dbpass@learnmongo.inl2sbo.mongodb.net/?appName=learnMongo";

// const client = new MongoClient(uri);
const databaseName = "testMongo";
const collectionName = "testCollection";
 
 

async function run() {
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  try {
    await client.connect();
    console.log("Connected");

    const result = await client.db("admin").command({ ping: 1 });

    console.log(result);
  } catch (err) {
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    console.error("Cause:", err.cause);
    console.error(err);
  } finally {
    await client.close();
  }
}

run();




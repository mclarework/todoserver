const { MongoClient } = require("mongodb");

const getData = async () => {
  const uri =
    "mongodb+srv://Mike:%23Asmodii1981@practise-cluster-jdtv7.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const db = client.db("joinus");
    const response = await db
      .collection("to-do")
      .find()
      .toArray();
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const addEmail = async email => {
  const uri =
    "mongodb+srv://Mike:%23Asmodii1981@practise-cluster-jdtv7.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const db = client.db("joinus");
    await db
      .collection("emails")
      .insertOne({ email: email, created_at: new Date() });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = { getData, addEmail };

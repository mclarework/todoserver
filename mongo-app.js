const { MongoClient,ObjectId } = require("mongodb");

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

const addToDo = async todo => {
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
    .collection("to-do")
    .insertOne({ task: todo});
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const remove = async(togo)  => {
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
    .collection("to-do")
    .deleteOne({ "task" : togo });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = { getData, addToDo, remove };

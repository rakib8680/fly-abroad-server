require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middlewares
app.use(express.json());
app.use(cors());

// base api
app.get("/", (req, res) => {
  res.send("Welcome to Fly Abroad server");
});

// connect to mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.crku76a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();

    // make data base
    const visaCollection = client.db("flyAbroad").collection("allVisa");
    const appliedVisaCollection = client
      .db("flyAbroad")
      .collection("appliedVisa");

    // routes .....................................................................
    //   get all added visa
    app.get("/allVisa", async (req, res) => {
      const result = await visaCollection.find().toArray();
      // console.log(result);
      res.send(result);
    });

    //   add visa
    app.post("/addVisa", async (req, res) => {
      const visaData = req.body;
      const result = await visaCollection.insertOne(visaData);
      res.send(result);
    });

    // get single visa by id
    app.get("/visa/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visaCollection.findOne(query);
      res.send(result);
    });



    // get user specific visa
    app.get("/myVisa/:email", async (req, res) =>{
      const email = req.params.email;
      const query = {visa_creator_email: email};
      const result = await visaCollection.find(query).toArray();
      res.send(result);
    })


    // update visa 
    app.patch("/updateVisa/:id", async(req,res)=>{
      const id = req.params.id;
      const visa = {_id: new ObjectId(id)};
      const body = req.body;
      const updateVisa = {
        $set : {
          ...body
        }
      }

      const result = await visaCollection.updateOne(visa, updateVisa);
      res.send(result);
    })






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");

const mongosse = require("mongoose");

const cors = require("cors");

//const User = require("./Models/userModel");
//const Product = require("./Models/produitModel");
const userRouter = require ("./Routers/usersRouter")

const productRouter = require("./Routers/productRouter")

require("dotenv").config({ path: "./config/.env" });

const port = 5000;
const app = express();
const urlDB = process.env.URLDB;

//pour accepter les request externe
app.use(cors());
//
app.use(express.json());


app.use('/users',userRouter);
app.use('/products',productRouter);




// connect to  db
mongosse
.connect(urlDB)
  .then(() => {
    console.log("db connect");
  })
  .catch((err) => {

    console.log(err);
  });


  
//create a server
app.listen(port, () => {  
  console.log("server connect");
});

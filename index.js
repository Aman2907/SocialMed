const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


//midd
app.use(express.json()); //body parser
app.use(helmet());
app.use(morgan("common"));


app.get("/", (req,res) =>{
  res.send("Welcome to homepage")
})

app.use("/api/users" , userRoute )
app.use("/api/auth" ,authRoute )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


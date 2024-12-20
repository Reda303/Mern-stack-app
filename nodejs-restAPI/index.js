const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Ensure dotenv is imported correctly
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


dotenv.config(); // Load environment variables from .env file

// Use async/await for connecting to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Removed deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));7


app.use("/api/users" ,userRoute);
app.use("/api/auth" ,authRoute);
app.use("/api/posts", postRoute);


connectDB(); // Call the connection function

app.listen(8800, () => {
  console.log("BackEnd server is running!");
});

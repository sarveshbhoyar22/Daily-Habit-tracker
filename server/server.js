const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const habitRoutes = require("./routes/habitRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
// app.use(cors());
// const cors = require("cors");
app.use(
  cors({
    origin: `${process.env.CLIENT_ORIGIN}`, // React frontend origin
    credentials: true,
  })
); 
app.use(express.json());

app.use("/api/habits", habitRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

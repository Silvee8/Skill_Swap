import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import swapRoutes from "./routes/swapRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";

dotenv.config(); //load environment variables

//connect to Mongodb
connectDB();

const app = express();
//Middleware
app.use(express.json()); //Parse JSON request bodies
app.use(morgan("dev")); // log HTTP requests



// Routes
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/swap", swapRoutes);

//Basic test route

app.get("/", (req, res)=>{
  res.json({message: "Skill Swap API is running"});
});

//start server
const PORT = process.env.PORT|| 5000;
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});


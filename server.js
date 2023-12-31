import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("🚀...BOOM ...!DATABASE CONNECTED");
  })
  .catch(() => {
    console.log("DB CONNECTION ERROR 😢...");
  });

app.use(express.json());

// Dynamically load all route files using fs and map
fs.readdirSync("./api/routes").map((file) => {
  app.use("/api", require(`./api/routes/${file}`).default);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import mongoose from "mongoose";
import router from "./views/router";

const app = express()
app.use(express.json())
app.use('/api', router)

async function start() {
  await mongoose.connect('mongodb://127.0.0.1:27017/users')
  console.log("Connected to the database!")

  app.listen(8000, () => {
    console.log("Express API is running on localhost: 8000")
  })
}
start()

export default app


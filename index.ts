import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import router from "./views/router";
import { MONGODB_URI, PORT } from './config/environment'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

async function start() {
  await mongoose.connect(MONGODB_URI)
  console.log("Connected to the database!")

  const serverPromise = app.listen(PORT, () => {
    console.log(`Express API is running on localhost:${PORT}`)
  })

  return serverPromise
}
start()

export default app


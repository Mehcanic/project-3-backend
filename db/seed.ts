import mongoose from "mongoose";
import { disconnect } from "process";
import Users from '../models/users'


async function seed() {
  await mongoose.connect('mongodb://127.0.0.1:27017/user')
  console.log("Connect to the databse!")

  await mongoose.connection.db.dropDatabase()
  console.log("Database cleared.")

  const user = await Users.create(userData)
  await mongoose.disconnect()
  console.log(user)

}
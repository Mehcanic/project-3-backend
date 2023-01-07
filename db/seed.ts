import mongoose from "mongoose";
import Users from '../models/users'

function getUserData() {
  return [
    {
      username: "lukasz",
      email: "lukasz@lukasz.com",
      password: "Password123@",
      phone: "0-1234-567-899",
      // profileImg: "https://i.imgur.com/UzUEJTnm.jpg",
      isAdmin: false,
    },
    {
      username: "raf",
      email: "raf@raf.com",
      password: "Password123@",
      phone: "0-1234-567-899",
      // profileImg: "https://i.imgur.com/tMbaaXmm.jpg",
      isAdmin: false,
    },
    {
      username: "rob",
      email: "rob@rob.com",
      password: "Password123@",
      phone: "0-1234-567-899",
      // profileImg: "https://i.imgur.com/vKUWsQCm.jpg",
      isAdmin: false,
    },
  ]
}

const productData = [{
  
}]

async function seed() {
  await mongoose.connect('mongodb://127.0.0.1:27017/users')
  console.log("Connected to the databse!")

  await mongoose.connection.db.dropDatabase()
  console.log("Database cleared.")

  const user = await Users.create(getUserData())

  await mongoose.disconnect()
  console.log(user)
}
seed()
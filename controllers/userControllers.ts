import { Request, Response } from "express";
import Users from '../models/users'

export async function getUsers(req: Request, res: Response) {
  try {
    console.log("something")
    const users = await Users.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting all users" })
  }
}
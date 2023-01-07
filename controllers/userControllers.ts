import { Request, Response } from "express";
import User from '../models/users'

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting all users" })
  }
}
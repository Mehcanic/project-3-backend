import { Request, Response } from "express";
import Users from '../models/users'
import jwt from "jsonwebtoken";
import { secret } from "../config/environment";


export async function getUsers(req: Request, res: Response) {
  try {
    const users = await Users.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting all users" })
  }
}

export async function signUp(req: Request, res: Response) {
  try {
    const user = await Users.create(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error signing up" })
  }
}

export async function login(req: Request, res: Response) {
  try {
    const user = await Users.findOne({ email: req.body.email })
    if (!user) {
      return res.send({ message:'Incorrect login or password'})
    }
      const token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '24h' }
      )
      res.send({ message: "Login successful", token })
  } catch (error) {
    console.log(error)
    res.send({ message: "Incorrect login or password" })
  }
}
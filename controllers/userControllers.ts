import { Request, Response } from 'express';
import Users from '../models/users'
import jwt from "jsonwebtoken";
import { secret } from "../config/environment";

export async function signUp(req: Request, res: Response) {
  try {
    const user = await Users.create(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error when signing up" })
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

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await Users.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting all users" })
  }
}

export async function getOneUser(req: Request, res: Response) {
  try {
    const userId = req.params.userId
    const user = await Users.findById(userId)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting the user." })
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const body = req.body
    const userId = req.params.userId
    const updatedUser = await Users.findByIdAndUpdate(userId, body, { new: true })
    res.send(updatedUser)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error when updating the user" })
  }
}

export async function removeUser(req: Request, res: Response) {
  try {
    const userId = req.params.userId
    await Users.findByIdAndDelete(userId)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was and error when removing the user." })
  }
}


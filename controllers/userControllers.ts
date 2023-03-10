import { Request, Response } from 'express';
import Users, {validatePassword} from '../models/users'
import Products from '../models/products';
import jwt from "jsonwebtoken";
import { secret } from "../config/environment";
import mongoose from 'mongoose';

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

    const isValidPassword = validatePassword(req.body.password, user.password)

    if (isValidPassword) {
      const token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '24h' }
      )
      res.send({ message: "Login successful", token })
    } else (
      res.send({ message: "Incorrect login or password" })
    )
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

export async function addToBasket(req: Request, res: Response) {
  try {
    const userId = req.params.userId
    const productId = req.params.productId
    const product = await Products.findById(productId)
    const user = await Users.findById(userId);
    
    if (!product) {
      return res.send({ message: "Product not found" });
    }
    if(!user) {
      return res.send({ message: "User not found." })
    }

    user.boughtProducts.push(productId)
    const savedUser = await user.save()
    
    res.send({savedUser, message: "Product added to basket" });
  } catch (error) {
    console.log(error)
    res.send({ message: "Error adding product to basket" })
  }
}

export async function getUserBasket(req: Request, res: Response) {
  try {
    const userId = req.params.userId
    const user = await Users.findById(userId)

    if(!user) {
      return res.send({ message: "There was an error getting the user. "})
    }

    const basket = user.basket
    res.send(basket)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting user basket!" })
  }
}

export async function removeFromBasket(req: Request, res: Response) {
  try {
    const user = await Users.findById(req.params.userId)
    if(!user) {
      return res.send({ message: "Customer not found" })
    }
    
    const basketItem = await Products.findById(req.params.productId)

    console.log(basketItem)
    const removeProduct = await Users.findByIdAndUpdate({
      _id: user,
      basket: {
        $elemMatch: {
          _id: req.params.productId
        }
      }
    }, {
      $pull: {
        _id: req.params.productId
      }
    })

    res.send({ message: `Removed product: "${basketItem}.`})

  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error when removing the product from the basket!" })
  }
}



export async function getBoughtProducts(req: Request, res: Response) {
  
}
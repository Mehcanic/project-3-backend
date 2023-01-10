import { Request, Response } from 'express'
import Products from '../models/products'

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await Products.find()
    res.send(products)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting all products" })
  }
}

export async function getOneProduct(req: Request, res: Response) {
  try {
    const productId = req.params.productId
    const product = await Products.findById(productId)
    res.send(product)
  } catch (error) {
    console.log(error)
    res.send({ message: "There was an error getting the product." })
  }
}


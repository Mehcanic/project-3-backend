import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment'
import Users from '../models/users'

interface JwtPayload {
  userId: string
}

export default function secureRoute(req: Request, res: Response, next: NextFunction) {
  const rawToken = req.headers.authorization
  if (!rawToken) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const token = rawToken.replace("Bearer ", "")
  jwt.verify(token, secret, async (err, payload) => {
    if (err || !payload) {
      return res.status(401).json({ message: "Unauthorized" })
    }
    const jwtPayload = payload as JwtPayload
    const user = await Users.findById(jwtPayload.userId)
    req.currentUser = user
    console.log("Token works properly")
    next()
  })
}

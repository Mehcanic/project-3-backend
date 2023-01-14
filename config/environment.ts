import dotenv from 'dotenv'
dotenv.config()

export const secret = 'super secret message'

export const MONGODB_URI = getMongoURI()

function getMongoURI(): string {
  if (process.env.NODE_ENV === 'test') {
    return process.env.MONGODB_URI_TEST as string
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.MONGODB_URI as string
  }
  return process.env.MONGODB_URI_DEV as string
}

export const PORT = getPort()

function getPort(): number {
  if (process.env.NODE_ENV === 'production') {
    return Number(process.env.EXPRESS_PORT)
  }
  return Number(process.env.EXPRESS_PORT_LOCAL)
}
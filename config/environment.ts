import dotenv from 'dotenv'
dotenv.config()

export const secret = 'super secret message'

export const MONGODB_URI = getMongoURI()

function getMongoURI(): string {
  if (process.env.NODE_ENV === 'test') {
    return process.env.MONGODB_URI_TEST as string
  }
  return process.env.MONGODB_URI_DEV as string
}
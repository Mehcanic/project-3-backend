import express from 'express'
const router = express.Router()
import { getUsers } from '../controllers/userControllers'

router.route('/users').get(getUsers)


export default router
import express from 'express'
const router = express.Router()
import { getUsers } from '../controllers/userControllers'

router.route('/users').get(getUsers)
// get allProducts
// get oneProduct
// post userLogin
// post userSignUp
// post rateProduct


// if time
// put updateUserDetails
// post commentProduct
// delete removeComment
// put editComment

export default router


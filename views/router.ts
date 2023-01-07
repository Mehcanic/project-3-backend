import express from 'express'
const router = express.Router()
import { getUsers, login, signUp } from '../controllers/userControllers'

router.route('/users').get(getUsers)

// get allProducts
// get oneProduct
// post userLogin
// post userSignUp
// post rateProduct

router.route('/signup').post(signUp)
router.route('/login').post(login)

// if time
// put updateUserDetails
// post commentProduct
// delete removeComment
// put editComment

export default router


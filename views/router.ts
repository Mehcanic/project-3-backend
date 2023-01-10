import express from 'express'
const router = express.Router()
import { getUsers, getOneUser, updateUser, removeUser,  login, signUp, } from '../controllers/userControllers'
import { getAllProducts, getOneProduct } from '../controllers/productControllers'
router.route('/users').get(getUsers)
router.route('/users/:userId').get(getOneUser)
router.route('/users/:userId').put(updateUser)
router.route('/users/:userId').delete(removeUser)

router.route('/signup').post(signUp)
router.route('/login').post(login)

router.route('/products').get(getAllProducts)
router.route('/products/:productId').get(getOneProduct)


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


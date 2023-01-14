import express from 'express'
const router = express.Router()
import { getUsers, getOneUser, updateUser, removeUser,  login, signUp, addToBasket, getBoughtProducts, getUserBasket } from '../controllers/userControllers'
import { getAllProducts, getOneProduct } from '../controllers/productControllers'
import secureRoute from '../middleware/secureRoute'


router.route('/users').get(getUsers)
router.route('/users/:userId').get(getOneUser)
router.route('/users/:userId').put(secureRoute, updateUser)
router.route('/users/:userId').delete(secureRoute, removeUser)

router.route('/users/:userId/basket/:productId').post(addToBasket)
router.route('/users/:userId/basket').get(getUserBasket)
router.route('/users/:userId/boughtProducts').get(getBoughtProducts)

router.route('/signup').post(signUp)
router.route('/login').post(login)
// router.route('/logout').post(logout)

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


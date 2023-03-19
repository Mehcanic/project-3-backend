import express from 'express'
const router = express.Router()
import { getUsers, getOneUser, updateUser, removeUser,  login, signUp, addToBasket, getBoughtProducts, getUserBasket, removeFromBasket } from '../controllers/userControllers'
import { getAllProducts, getOneProduct } from '../controllers/productControllers'
import secureRoute from '../middleware/secureRoute'


router.route('/users').get(secureRoute, getUsers)
router.route('/users/:userId').get(secureRoute, getOneUser)
router.route('/users/:userId').put(secureRoute, updateUser)
router.route('/users/:userId').delete(secureRoute, removeUser)

router.route('/users/:userId/basket/:productId').post(secureRoute, addToBasket)
router.route('/users/:userId/basket').get(secureRoute, getUserBasket)
router.route('/users/:userId/basket/:productId').delete(secureRoute, removeFromBasket)
router.route('/users/:userId/boughtProducts').get(secureRoute, getBoughtProducts)

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


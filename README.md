
# GA SEI PROJECT 3 - E-Commerce Website

This project was created as a part of the General Assembly Software Engineering Immersive course. This was a group project made alongside with:

- Rafael Velho Soares [<https://github.com/Rafaelvsoares>]
- Rob Wilhelmsson [<https://github.com/robwilhelmsson>]

Our task was to create full stack application using MERN stack.

The application had to be a CRUD application with multiple models. It had to be deployed online and to have automated tests for at least one RESTful resource on the back-end. I was responsible for the backend and login with signup on the front-end part of application. Also I was responsible for deployment and GitHub repositories. We used Jira to plan and manage our project.

## Getting started and deployment

- This project is split into two repositories. One for the backend:  
  <https://github.com/Mehcanic/project-3-backend>  
  and one for the frontend:  
  <https://github.com/Mehcanic/project-3-frontend>

- The frontend is available to view [here](<https://project-kleur.netlify.app/>)
- If you would like to take a look at the code please clone it and run:

```console
npm install
```

- Make sure you have MongoDB installed on your computer. 
- If you have it please run:

```console
mongod --dbpath ~/data/db
```

- Than run:

```console
npm run dev
```

## Timeframe

- The time frame for the project was 2 weeks.

## Technologies used for the backend

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- Jsonwebtoken
- Validator
- Cors
- Netlify
- lfy.io
- Jira

## Brief

- Work in a team, using git to code collaboratively.
- Build a full-stack application by making our own backend and front-end
- Use an Express API to serve our data from a Mongo database
- Consume our API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help us know which features are core MVP and which we can cut
- Have a visually impressive design to kick our portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.
- Have automated tests for at least one RESTful resource on the back-end. Improve our employability by demonstrating a good understanding of testing principals.

## Planning and Development procces

1. Our first step was to decide about features for the application. We used Excalidraw for initial wireframe of the project:
![Excalidraw](./Excalidraw.png)

2. Next step was to create GitHub repositories for the project and to create a Jira board to plan and manage the prject and task for it:
![Jira](./Jira-board.png)

3. Rafael took his time to create wireframe in Figma. He was also responsible for the custom 3d cube done with three.js:
![Figma](./Figma-board.png)

    Rob was responsible for the front-end part of the project. He used Material UI to create the design of the application. He also created the login and signup forms. He also created the router for the application.

    I was responsible for the backend part of the project. I created the models for the application and the controllers. I also created the routes for the application. I also created the seed file for the application. I also created the login and signup functionality for the application. I also created the deployment for the application.

    We all worked together to create models for the users:

      ```javascript
    const userSchema = new mongoose.Schema({
      username: { type: String, unique: true, required: true },
      email: { type: String, unique: true, required: true,
        validate: (email: string) => validator.isEmail(email)
      },
      password: { type: String, required: true,
        validate: (password: string) => {
          return validator.isStrongPassword(password, 
          { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
        }
      },
      phone: { type: String },
      profileImg: { type: String },
      isAdmin: { type: Boolean },
      basket: [],
      boughtProducts: []
    })
      ```

    and for the products:

    ```javascript
    const productSchema = new mongoose.Schema({
      name: { type: String, required: true, unique: true, },
      brand: { type: String },
      colorCode: { type: String, required: true },
      price: { type: Number, required: true },
      discount: { type: Number },
      decription: { type: String },
      rating: { type: Number, min: 0, max: 5, default: 5, },
      images: [
        { type: String }
      ]
    });
    ```

    We decided that we will keep the basket inside the user model. It was easier to manage the basket this way. We also decided to keep the bought products inside the user model.

4. Next I created the app in index.ts and made sure it is connecting to the database:

    ```javascript
    import express from "express";
    import cors from 'cors'
    import mongoose from "mongoose";
    import router from "./views/router";
    import { MONGODB_URI, PORT } from './config/environment'

    const app = express()
    app.use(express.json())
    app.use(cors())

    app.use('/api', router)

    async function start() {
      await mongoose.connect(MONGODB_URI)
      console.log("Connected to the database!")

      const serverPromise = app.listen(PORT, () => {
        console.log(`Express API is running on localhost:${PORT}`)
      })

      return serverPromise
    }
    start()

    export default app
    ```

5. Next steo was to create fist simple user and product controllers to make sure the app is working:

    ```javascript
    export async function getUsers(req: Request, res: Response) {
      try {
        const users = await Users.find()
        res.send(users)
      } catch (error) {
        console.log(error)
        res.send({ message: "There was an error getting all users" })
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
    ```

6. Next step was to create the routes for the application:

    ```javascript
    router.route('/users').get(secureRoute, getUsers)

    router.route('/users/:userId/basket/:productId').post(secureRoute, addToBasket)

    router.route('/signup').post(signUp)
    ```

7. Next step was to create the seed file for the application. All of the products are added in the seed file as the users will not be able to add products to the database.

    ```javascript
    function getProductData(user: any) {
      return [
        {
          name: "Pepper Red",
          ...,
        },
      ]
    }
    const userData = [
      {
        username: "lukasz",
        ...
      },
    ]

    async function seed() {
      await mongoose.connect(MONGODB_URI)
      console.log("Connected to the databse!")

      await mongoose.connection.db.dropDatabase()
      console.log("Database cleared.")

      const user = await Users.create(userData)
      const productData = getProductData(user)
      const products = await Products.create(productData)

      await mongoose.disconnect()
    }
    seed()
    ```

8. After creating the seed file I created the login and signup functionality for the application. For the login and signup functionality I used bcrypt to hash the password, mongoose hidden to hide elements of the user object from accesing by unauthorised user and jwt to create the token. The token is stored in the local storage of the browser.

    ```javascript
    export const secret = 'super secret message'
    import bcrypt from 'bcrypt'
    userSchema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true, phone: true, isAdmin: true, profileImg: true } }))

    userSchema.pre('save', function hashPassword(next) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
      next()
    })
    ```

9. I also created the secure route for the application. The secure route is used to make sure that the user is logged in before they can access the protected routes.

    ```javascript
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
    ```

10. At this point I have created rest of the controllers and routes for the application.

## Challenges

- This was my first project backend project using MongoDB, Mongoose and ExpressJS. There was a lot of new information to get comfortable with to understand how the create controllers for the application.
- Making the removeFromBasket() controller for the user was a big headache. I spend a lot of time on it and I am still not happy with the result. I would like to improve it in the future.

## Wins

Writing simple but functioning CRUD application was a big win for me. I am happy that I managed to create, and more important understand the way the application works. The user controllers for the basket aren't perfect but they are working. I am happy that I managed to create the removeFromBasket() controller. It was a big win for me.

## Future improvements

- I’m currently working on fixing the removeFromBasket() controller as it’s not functioning as intended. I’ve identified a few issues that I’m addressing and I’ll keep you updated on my progress.
- I’m planning to create a separate basket model as having it inside the user model is not an optimal solution. I’d like to have a basket inside a basket model instead. This will help us keep our code organized and make it easier to maintain in the long run.

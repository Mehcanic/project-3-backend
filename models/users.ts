import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// const BasketSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   products: [
//     {
//       product: {
//         type: Schema.Types.ObjectId,
//         ref: 'Product',
//       },
//     },
//   ],
// });


const userSchema = new mongoose.Schema({
  name: {
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
  },
  location: {
    street: { type: String },
    city: { type: String },
    county: { type: String },
    country: { type: String },
    postcode: { type: String },
  },
  phone: { type: Number },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profileImg: { type: String },
  isAdmin: { type: Boolean },
  // basket: [{ BasketSchema }]
  // boughtProducts: [{}]
})

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)
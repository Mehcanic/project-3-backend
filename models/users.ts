import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import validator from 'validator'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'
import mongooseHidden from 'mongoose-hidden'


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

// ! Uncomment this line when product will be ready to deploy
userSchema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true, phone: true, isAdmin: true, profileImg: true } }))

userSchema.pre('save', function hashPassword(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  next()
})

export function validatePassword(loginPassword: string, originalPassword: string) {
  return bcrypt.compareSync(loginPassword, originalPassword)
}

export function checkPassword(password: string, passwordConfirmation: string) {
  return password === passwordConfirmation
}

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)
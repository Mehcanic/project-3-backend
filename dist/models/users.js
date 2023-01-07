"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
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
const userSchema = new mongoose_1.default.Schema({
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
});
userSchema.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose_1.default.model('User', userSchema);

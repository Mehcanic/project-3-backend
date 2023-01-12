import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, },
  brand: { type: String, requiered: false, unique: false, },
  colorCode: { type: String,  required: true, unique: false },
  price: { type: Number, required: true, unique: false, },
  discount: { type: Number, unique: false },
  decription: { type: String, required: false, unique: false },
  rating: { type: Number, min: 0, max: 5, default: 5, },
  images: [
   { type: String }
  ]
});

productSchema.plugin(uniqueValidator)

export default mongoose.model("Product", productSchema);
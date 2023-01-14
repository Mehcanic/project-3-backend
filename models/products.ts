import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator"

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

productSchema.plugin(uniqueValidator)

export default mongoose.model("Product", productSchema);
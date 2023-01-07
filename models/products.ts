import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    requiered: false,
    unique: false,
  },
  colorCode: {
    type: String, 
    required: true,
    unique: false
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  discount: {
    type: Number,
    unique: false
  },
  decription: {
    type: String,
    required: false,
    unique: false
  },
  images: [
    {
      image_shape1: {
        type: String, required: false, unique: false
      },
      image_shape2: {
        type: String, required: false, unique: false
      },
      image_shape3: {
        type: String, required: false, unique: false
      },
      image_shape4: {
        type: String, required: false, unique: false
      },
      image_shape5: {
        type: String, required: false, unique: false
      }
    }
  ],
  rating: {
    type: Number,
    required: true,
    unique: false,
    default: 0, // TODO find out is it required
  },
});

productSchema.plugin(uniqueValidator)

export default mongoose.model("Product", productSchema);
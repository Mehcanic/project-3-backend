"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const productSchema = new mongoose_1.default.Schema({
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
productSchema.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose_1.default.model("Product", productSchema);

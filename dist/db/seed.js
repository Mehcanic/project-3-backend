"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("../models/users"));
function getUserData() {
    return [
        {
            username: "lukasz",
            email: "lukasz@lukasz.com",
            password: "Password123@",
            phone: "0-1234-567-899",
            // profileImg: "https://i.imgur.com/UzUEJTnm.jpg",
            isAdmin: false,
        },
        {
            username: "raf",
            email: "raf@raf.com",
            password: "Password123@",
            phone: "0-1234-567-899",
            // profileImg: "https://i.imgur.com/tMbaaXmm.jpg",
            isAdmin: false,
        },
        {
            username: "rob",
            email: "rob@rob.com",
            password: "Password123@",
            phone: "0-1234-567-899",
            // profileImg: "https://i.imgur.com/vKUWsQCm.jpg",
            isAdmin: false,
        },
    ];
}
const productData = [{}];
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/users');
        console.log("Connected to the databse!");
        yield mongoose_1.default.connection.db.dropDatabase();
        console.log("Database cleared.");
        const user = yield users_1.default.create(getUserData());
        yield mongoose_1.default.disconnect();
        console.log(user);
    });
}
seed();

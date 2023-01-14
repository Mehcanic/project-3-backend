import mongoose from "mongoose";
import products from "../models/products";
import Users from '../models/users'
import Products from '../models/products'
import { MONGODB_URI } from '../config/environment'

function getProductData(user: any) {
  return [
    {
      name: "Pepper Red",
      colorCode: "#B33E3F",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi quos! Harum veritatis autem maxime aliquam, excepturi dolor eos voluptas?",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/pepper-red-1_pwigtt.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/pepper-red-2_xx2twg.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/pepper-red-3_cldtem.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/pepper-red-4_std3mt.png"
      ]
    },
    {
      name: "Tangerine Twist",
      colorCode: "#E2712C",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum possimus nihil tempore quia ullam vel, tempora obcaecati amet animi!",
      images: [

        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/tangerine-twist-1_josaft.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/tangerine-twist-2_sdlsew.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/tangerine-twist-3_rt8jez.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/tangerine-twist-4_qzy5ml.png"
      ]
    },
    {
      name: "Royal Purple",
      colorCode: "#75009D",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, laudantium cumque? Accusantium laborum harum sapiente et minima illum suscipit natus?",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/royal-purple-1_zrd8ip.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/royal-purple-2_irmb34.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/royal-purple-3_kp1tkg.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/royal-purple-4_ydzfpz.png",
      ]
    },
    {
      name: "Pebble Shore",
      colorCode: "#B33E3F",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta iste doloribus fugiat libero ad pariatur vitae quisquam deserunt repellat harum!",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/pebble-shore-1_c9drrk.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/pebble-shore-2_nf3z5s.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/pebble-shore-3_ycnttm.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/pebble-shore-4_ewx8er.png"
      ]
    },
    {
      name: "Nordic Sky",
      colorCode: "#3A7D9B",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi quos! Harum veritatis autem maxime aliquam, excepturi dolor eos voluptas?",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/nordic-sky-1_d3c9rh.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/nordic-sky-2_ki0ebx.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/nordic-sky-3_daqvbm.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552189/Kleur/nordic-sky-4_rotqw4.png"
      ]
    },
    {
      name: "Mountain Moss",
      colorCode: "#897F3A",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis id iusto ea eaque modi saepe dolorum nesciunt incidunt natus officiis?",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/mountain-moss-1_apgwdr.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/mountain-moss-2_yyyknk.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/mountain-moss-3_uivq6j.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/mountain-moss-4_ik7yuq.png"
      ]
    },
    {
      name: "Lilac Rose",
      colorCode: "#C8AEC0",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id velit sapiente distinctio sunt exercitationem reprehenderit eligendi totam alias porro!",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lilac-rose-1_oe8k0a.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lilac-rose-2_thrsug.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lilac-rose-3_i7yeqh.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lilac-rose-4_veanca.png"
      ]
    },
    {
      name: "Lemon Zest",
      colorCode: "#FBD562",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem nulla a ea, sapiente earum. Pariatur ex consequatur nemo quo.",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lemon-zest-1_hnblc3.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/lemon-zest-2_lsbnh4.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/lemon-zest-3_odtg5a.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552185/Kleur/lemon-zest-4_iw3ata.png"
      ]
    },
    {
      name: "Kiwi Crush",
      colorCode: "#BDD176",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi corporis accusamus, beatae delectus aspernatur totam dolores odit odio maxime.",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/kiwi-crush-1_v6knq0.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/kiwi-crush-2_okg9mt.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/kiwi-crush-3_ci4umv.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/kiwi-crush-4_m9y3gc.png"
      ]
    },
    {
      name: "Flamingo Flock",
      colorCode: "#E18D93",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro modi debitis accusantium accusamus dignissimos voluptatibus et corrupti similique hic?",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/flamingo-flock-1_o5gbu5.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/flamingo-flock-2_c3rolx.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/flamingo-flock-3_dez10t.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/flamingo-flock-4_ge436g.png"
      ]
    },
    {
      name: "Emerald Glade",
      colorCode: "#2F7769",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, voluptatum porro adipisci eius et suscipit itaque quas veniam rerum laudantium!",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/emerald-glade-1_v0vgkc.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552188/Kleur/emerald-glade-2_saecjr.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/emerald-glade-3_sr5ekw.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552187/Kleur/emerald-glade-4_pkmhf7.png"
      ]
    },
    {
      name: "Blissful Blue",
      colorCode: "#82C8E3",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta officia sint fugit? Excepturi doloremque quidem sed sequi aut maxime!",
      images: [
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/blissful-blue-1_yjeuv8.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/blissful-blue-2_q3tloy.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/blissful-blue-3_nspzc0.png",
        "https://res.cloudinary.com/dsbf5jbag/image/upload/v1673552186/Kleur/blissful-blue-4_oypgq7.png"
      ]
    }
  ]
}
const userData = [
  {
    username: "lukasz",
    email: "lukasz@lukasz.com",
    password: "Password123@",
    phone: "0-1234-567-899",
    profileImg: "https://i.imgur.com/UzUEJTnm.jpg",
    isAdmin: false,
  },
  {
    username: "raf",
    email: "raf@raf.com",
    password: "Password123@",
    phone: "0-1234-567-899",
    profileImg: "https://i.imgur.com/tMbaaXmm.jpg",
    isAdmin: false,
  },
  {
    username: "rob",
    email: "rob@rob.com",
    password: "Password123@",
    phone: "0-1234-567-899",
    profileImg: "https://i.imgur.com/vKUWsQCm.jpg",
    isAdmin: false,
  }
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
import mongoose from "mongoose";
import products from "../models/products";
import Users from '../models/users'
import Products from '../models/products'


function getProductData(user: any) {
  return [
    {
      name: "Pepper Red",
      colorCode: "#B33E3F",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi quos! Harum veritatis autem maxime aliquam, excepturi dolor eos voluptas?",
      images: [
        {
          image_shape1: "https://i.imgur.com/PuEcA5g.png"
        },
        {
          image_shape1: "https://i.imgur.com/dhFGVBC.png"
        },
        {
          image_shape1: "https://i.imgur.com/PGVvvN1.png"
        },
        {
          image_shape4: "https://i.imgur.com/fHhkP40.png"
        }
      ]
    },
    {
      name: "Tangerine Twist",
      colorCode: "#E2712C",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum possimus nihil tempore quia ullam vel, tempora obcaecati amet animi!",
      images: [
        {
          image_shape1: "https://i.imgur.com/GWn82b8.png"
        },
        {
          image_shape1: "https://i.imgur.com/BwfViL7.png"
        },
        {
          image_shape1: "https://i.imgur.com/qJSksU5.png"
        },
        {
          image_shape4: "https://i.imgur.com/SoFrcJj.png"
        }
      ]
    },
    {
      name: "Royal Purple",
      colorCode: "#75009D",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, laudantium cumque? Accusantium laborum harum sapiente et minima illum suscipit natus?",
      images: [
        {
          image_shape1: "https://i.imgur.com/xa7XdDg.png"
        },
        {
          image_shape1: "https://i.imgur.com/psXrTSR.png"
        },
        {
          image_shape1: "https://i.imgur.com/iiyQF4y.png"
        },
        {
          image_shape4: "https://i.imgur.com/zAeBVP1.png"
        }
      ]
    },
    {
      name: "Pebble Shore",
      colorCode: "#B33E3F",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta iste doloribus fugiat libero ad pariatur vitae quisquam deserunt repellat harum!",
      images: [
        {
          image_shape1: "https://i.imgur.com/baX8vwU.png"
        },
        {
          image_shape1: "https://i.imgur.com/w1ZlsW0.png"
        },
        {
          image_shape1: "https://i.imgur.com/eQ4aeoc.png"
        },
        {
          image_shape4: "https://i.imgur.com/pkyjH9f.png"
        }
      ]
    },
    {
      name: "Nordic Sky",
      colorCode: "#3A7D9B",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi quos! Harum veritatis autem maxime aliquam, excepturi dolor eos voluptas?",
      images: [
        {
          image_shape1: "https://i.imgur.com/jra62q5.png"
        },
        {
          image_shape1: "https://i.imgur.com/V921MgW.png"
        },
        {
          image_shape1: "https://i.imgur.com/YTEyUW7.png"
        },
        {
          image_shape4: "https://i.imgur.com/xL9CE3w.png"
        }
      ]
    },
    {
      name: "Mountain Moss",
      colorCode: "#897F3A",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis id iusto ea eaque modi saepe dolorum nesciunt incidunt natus officiis?",
      images: [
        {
          image_shape1: "https://i.imgur.com/wKYi9qr.png"
        },
        {
          image_shape1: "https://i.imgur.com/Eab9bzi.png"
        },
        {
          image_shape1: "https://i.imgur.com/PCMqwPC.png"
        },
        {
          image_shape4: "https://i.imgur.com/H9VRsHw.png"
        }
      ]
    },
    {
      name: "Lilac Rose",
      colorCode: "#C8AEC0",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id velit sapiente distinctio sunt exercitationem reprehenderit eligendi totam alias porro!",
      images: [
        {
          image_shape1: "https://i.imgur.com/K2No2mV.png"
        },
        {
          image_shape1: "https://i.imgur.com/HRp794m.png"
        },
        {
          image_shape1: "https://i.imgur.com/pFd6vWI.png"
        },
        {
          image_shape4: "https://i.imgur.com/hl17o3f.png"
        }
      ]
    },
    {
      name: "Lemon Zest",
      colorCode: "#FBD562",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem nulla a ea, sapiente earum. Pariatur ex consequatur nemo quo.",
      images: [
        {
          image_shape1: "https://i.imgur.com/m63De0R.png"
        },
        {
          image_shape1: "https://i.imgur.com/O05GIL6.png"
        },
        {
          image_shape1: "https://i.imgur.com/MZBN3tt.png"
        },
        {
          image_shape4: "https://i.imgur.com/QetJcJ3.png"
        }
      ]
    },
    {
      name: "Kiwi Crush",
      colorCode: "#BDD176",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi corporis accusamus, beatae delectus aspernatur totam dolores odit odio maxime.",
      images: [
        {
          image_shape1: "https://i.imgur.com/L0e6efx.png"
        },
        {
          image_shape1: "https://i.imgur.com/gPE0sPi.png"
        },
        {
          image_shape1: "https://i.imgur.com/ervE6Xx.png"
        },
        {
          image_shape4: "https://i.imgur.com/DexSuNF.png"
        }
      ]
    },
    {
      name: "Flamingo Flock",
      colorCode: "#E18D93",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro modi debitis accusantium accusamus dignissimos voluptatibus et corrupti similique hic?",
      images: [
        {
          image_shape1: "https://i.imgur.com/H81lDTG.png"
        },
        {
          image_shape1: "https://i.imgur.com/G5c6Zb1.png"
        },
        {
          image_shape1: "https://i.imgur.com/gnfoEBS.png"
        },
        {
          image_shape4: "https://i.imgur.com/aAHibG3.png"
        }
      ]
    },
    {
      name: "Emerald Glade",
      colorCode: "#2F7769",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, voluptatum porro adipisci eius et suscipit itaque quas veniam rerum laudantium!",
      images: [
        {
          image_shape1: "https://i.imgur.com/qkMDAnB.png"
        },
        {
          image_shape1: "https://i.imgur.com/EP5Ny8l.png"
        },
        {
          image_shape1: "https://i.imgur.com/fASdy5M.png"
        },
        {
          image_shape4: "https://i.imgur.com/Zu36brK.png"
        }
      ]
    },
    {
      name: "Blissful Blue",
      colorCode: "#82C8E3",
      price: 0.04,
      discount: 0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta officia sint fugit? Excepturi doloremque quidem sed sequi aut maxime!",
      images: [
        {
          image_shape1: "https://i.imgur.com/Y6cN0XD.png"
        },
        {
          image_shape1: "https://i.imgur.com/62bkrzZ.png"
        },
        {
          image_shape1: "https://i.imgur.com/myWNhKX.png"
        },
        {
          image_shape4: "https://i.imgur.com/Ob2keZy.png"
        }
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
  await mongoose.connect('mongodb://127.0.0.1:27017/users')
  console.log("Connected to the databse!")

  await mongoose.connection.db.dropDatabase()
  console.log("Database cleared.")

  const user = await Users.create(userData)
  const productData = getProductData(user)
  const products = await Products.create(productData)

  await mongoose.disconnect()
}
seed()
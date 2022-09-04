const mongoose = require("mongoose");

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: String,

    imgurl: {
      type: String,
      default:
 "https://thumbs.dreamstime.com/z/product-text-made-wooden-cube-background-181806890.jpg",
    },
    category:{type:String,
      lowercase : true,
      required : true
    } ,

    prix: String,

    userlike:{type:[String],
      default:[]
    } ,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product ;

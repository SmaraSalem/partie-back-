const mongoose = require("mongoose");
const validator = require("validator")
 const userSchema = new mongoose.Schema(
  {
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  lastname: {
    type: String,
    lowercase: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,

    required: true,
  },
  role: {
    type: String,
    lowercase: true,

    default: "user"
  },
 blocked : { type: Boolean ,
  default :false

  }
},
{
  timestamps: true,
}
);
const User = mongoose.model("User", userSchema);

module.exports = User ;

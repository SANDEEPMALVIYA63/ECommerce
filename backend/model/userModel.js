const mongoose = require("mongoose");
 const {createHmac}= require('crypto')
const salt = "Sandeep"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    contacte: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique:true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
        type: String,
        require: true,
      },
  },
  { timestamps: true }
);

userSchema.pre("save",function(next){
    let user = this 
    console.log(user)
    if (!user.isModified("password")) return ;
    let newhashed= createHmac("sha256",salt).update(user.password).digest('hex')
    this.password=newhashed;
       next();
})


userModel = new mongoose.model("user", userSchema);
module.exports = userModel;

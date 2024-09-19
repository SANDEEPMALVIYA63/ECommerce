const mongoose = require("mongoose");

const ProducteSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
  },
  color: {
    type: String,
    require: true,
  },
  weight: {
    type: String,
    require: true,
  },

  size: {
    type: String,
    require: true,
  },
  categaryId: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
ProducteModel = new mongoose.model("product", ProducteSchema);
module.exports = ProducteModel;

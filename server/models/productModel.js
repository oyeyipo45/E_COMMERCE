import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  numReviews: { type: Number, default: 0, required: true },
  countInStock: { type: Number, default: 0, required: true }
});

// const productModel = mongoose.model("products", productSchema);

// export default productModel;

module.exports = mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const shippingSchema = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
}

const paymentSchema = {
  paymentMethod: { type: String, required: true },
}


const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  }
});


const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shipping: shippingSchema,
    payment: paymentSchema,
    orderItems: [orderItemSchema],
    itemsPrice: { type: Number },
    taxPrice: { type: Number },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    isPaid: { Boolean, default: false },
    PaidAt: { type: Date },
    isDelivered: { Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

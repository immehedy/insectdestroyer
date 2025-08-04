import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  deliveryLocation: {
    type: String,
    enum: ['inside', 'outside'],
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  product: {
    id: String,
    label: String,
    quantity: String,
    price: Number,
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'cancelled'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)

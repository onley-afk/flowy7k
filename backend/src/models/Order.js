const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    subtotal: {
      type: Number,
      required: true
    },
    iva: {
      type: Number,
      required: true
    },
    shippingCost: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    shippingAddress: {
      name: String,
      email: String,
      phone: String,
      province: String,
      city: String,
      address: String,
      postalCode: String
    },
    paymentMethod: {
      type: String,
      enum: ['mercadopago', 'transferencia'],
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending'
    },
    mercadoPagoId: {
      type: String,
      required: false
    },
    orderStatus: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'
    },
    trackingNumber: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);

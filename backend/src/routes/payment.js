const express = require('express');
const router = express.Router();
const axios = require('axios');
const Order = require('../models/Order');

// Crear preferencia de pago en Mercado Pago
router.post('/preference', async (req, res) => {
  try {
    const { items, total, orderId, email } = req.body;
    
    const preference = {
      items: items.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price
      })),
      external_reference: orderId,
      payer: {
        email: email
      },
      back_urls: {
        success: `${process.env.FRONTEND_URL}/payment/success`,
        failure: `${process.env.FRONTEND_URL}/payment/failure`,
        pending: `${process.env.FRONTEND_URL}/payment/pending`
      },
      auto_return: 'approved'
    };
    
    const response = await axios.post(
      'https://api.mercadopago.com/checkout/preferences',
      preference,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.MERCADO_PAGO_TOKEN}`
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verificar pago
router.get('/verify/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_TOKEN}`
        }
      }
    );
    
    if (response.data.status === 'approved') {
      // Actualizar estado de la orden
      await Order.findByIdAndUpdate(
        response.data.external_reference,
        { paymentStatus: 'completed', mercadoPagoId: paymentId },
        { new: true }
      );
    }
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
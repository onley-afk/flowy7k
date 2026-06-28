const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { getPriceBreakdown } = require('../utils/ivaCalculator');
const { getShippingCost } = require('../utils/provinces');

// Obtener todas las órdenes (admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user items.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener orden por ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user items.product');
    if (!order) return res.status(404).json({ error: 'Orden no encontrada' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear nueva orden
router.post('/', async (req, res) => {
  try {
    const { user, items, shippingAddress, paymentMethod, province } = req.body;
    
    // Calcular subtotal
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // Calcular IVA
    const priceBreakdown = getPriceBreakdown(subtotal);
    
    // Obtener costo de envío
    const shipping = getShippingCost(province);
    const shippingCost = shipping ? shipping.shippingCost : 500; // Costo por defecto
    
    // Total
    const total = priceBreakdown.total + shippingCost;
    
    const order = new Order({
      user,
      items,
      subtotal: priceBreakdown.subtotal,
      iva: priceBreakdown.iva,
      shippingCost,
      total,
      shippingAddress,
      paymentMethod,
      paymentStatus: 'pending'
    });
    
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar estado de la orden
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { orderStatus: status }, { new: true });
    if (!order) return res.status(404).json({ error: 'Orden no encontrada' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
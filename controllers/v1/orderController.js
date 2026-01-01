const Order = require("../../models/orderModel");

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json({ message: 'Orders fetched successfully' });
};

exports.createOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json({message: 'Order deleted successfully'});
};

exports.deleteOrder = async (req, res) => {
  res.json({ message: 'Order deleted successfully' });
};





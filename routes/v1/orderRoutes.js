const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middleware/authMiddleware');
const roleMiddleware = require('../../middleware/roleMiddleware');
const orderController = require('../../controllers/v1/orderController');

// Vendor-only
router.post(
  '/',
  authMiddleware,
  roleMiddleware('vendor'),
  orderController.createOrder
);

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('vendor'),
  orderController.deleteOrder
);

// Authenticated users
router.get(
  '/',
  authMiddleware,
  orderController.getOrders
);

module.exports = router;

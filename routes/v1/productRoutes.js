const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middleware/authMiddleware');
const roleMiddleware = require('../../middleware/roleMiddleware');
const productController = require('../../controllers/v1/productController');

// Public
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Vendor only
router.post(
  '/',
  authMiddleware,
  roleMiddleware('vendor'),
  productController.createProduct
);

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware('vendor'),
  productController.updateProduct
);

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('vendor'),
  productController.deleteProduct
);

module.exports = router;

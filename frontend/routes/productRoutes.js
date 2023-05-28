const express = require("express");
const router = express.Router();
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} = require("../controllers/productController");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");
const formidable = require("express-formidable");

// **** Routes ****

// Create a new product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get All Products
router.get("/get-product", getProductController);

// Get Single Product
router.get("/get-product/:slug", getSingleProductController);

// Get Photo
router.get("/product-photo/:pid", productPhotoController);

// Delete Product
router.delete("/delete-product/:pid", deleteProductController);

// Filter Products
router.post("/product-filters", productFiltersController);

// Product Count
router.get("/product-count", productCountController);

// Product Per Page
router.get("/product-list/:page", productListController);

// Search Products
router.get("/search/:keyword", searchProductController);

// Similar Products
router.get(`/related-product/:pid/:cid`, relatedProductController);

// Category wise Product
router.get(`/product-category/:slug`, productCategoryController);

// Payment Routes
// **** Token ****
router.get('/braintree/token', braintreeTokenController);

// **** Payments ****
router.post('/braintree/payment', requireSignIn, braintreePaymentController);

module.exports = router;
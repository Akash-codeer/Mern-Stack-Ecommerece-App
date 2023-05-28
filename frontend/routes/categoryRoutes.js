const express = require("express");
const { requireSignIn, isAdmin } = require("./../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singlecategoryController,
  DeleteCategoryController,
} = require("../controllers/categoryController");
const router = express.Router();

// **** Routes ****

// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get All Category
router.get('/get-category', categoryController);

// Single Category
router.get('/single-category/:slug', singlecategoryController);

// Delete Category
router.delete('/delete-category/:id', requireSignIn, isAdmin, DeleteCategoryController);

module.exports = router;

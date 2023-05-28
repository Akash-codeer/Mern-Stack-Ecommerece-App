const express = require('express');
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} = require("../controllers/authController.js");
const {requireSignIn, isAdmin} = require("../middlewares/authMiddleware.js");

// **** Router objext ****
const router = express.Router();

// **** Routing ****

// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || POST 
router.post('/login', loginController); 

// FORGOT PASSWORD || POST
router.post('/forgot-password', forgotPasswordController);


// TEST || GET
router.get("/test", requireSignIn, isAdmin, testController);

// **** Protected Route Auth ****
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ok: true});
});

// **** Protected Admin Route Auth ****
router.get('/admin-auth', requireSignIn, isAdmin,(req, res) => {
  res.status(200).send({ok: true});
});

// Update Profile
router.put('/profile',requireSignIn, updateProfileController);

// Order
router.get('/orders', requireSignIn, getOrdersController);

// All Orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

// Order Status Update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

module.exports = router;
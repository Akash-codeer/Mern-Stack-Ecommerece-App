const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoute.js");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const path = require("path");

// **** Configure env ****
dotenv.config();

// **** Database configuration ****
connectDB();

// **** Rest obj ****
const app = express();

// **** Middlewares ****
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./frontend/build')))

// rest api
// app.get("/", (req, res) => {
//   res.send("<h1> Welcome to Ecommerce App </h1>");
// });

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
})

// **** Routes ****
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// **** PORT ****
const PORT = process.env.PORT || 8080;

// **** Run Listen ****
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgGreen.bgYellow);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

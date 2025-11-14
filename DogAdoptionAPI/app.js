require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const dogRoutes = require("./routes/dogRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // parse JSON payloads

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/dogs", dogRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const donationRoutes = require("./routes/donations");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Atlas with Local Fallback)
const connectDB = async () => {
  try {
    // 🔹 Try connecting to MongoDB Atlas
    await mongoose.connect(
      "mongodb+srv://manognagorantla257:manu1369@cluster0.tvlm3ef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected (Atlas)");
  } catch (err) {
    console.error("❌ MongoDB Atlas Connection Failed. Trying Local DB...", err.message);

    // 🔹 Fallback to local MongoDB
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/fundraising", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected (Localhost)");
    } catch (localErr) {
      console.error("❌ Local MongoDB Connection Failed:", localErr.message);
      process.exit(1); // Exit if no DB connection is possible
    }
  }
};

connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

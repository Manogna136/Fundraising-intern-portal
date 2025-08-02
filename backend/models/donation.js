const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Reference User
  donorName: { type: String, default: "Anonymous" },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  referralCode: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);

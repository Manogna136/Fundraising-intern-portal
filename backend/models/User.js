const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  referralCode: { type: String, unique: true },
  totalRaised: { type: Number, default: 0 },
  donations: [
    {
      name: String,
      amount: Number,
      currency: { type: String, default: "INR" },
      date: { type: Date, default: Date.now }
    }
  ]
});

// ✅ Generate referral code: NAME + RandomNumber + 3-digit Timestamp (for uniqueness)
userSchema.pre("save", function (next) {
  if (!this.referralCode) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const safeName = this.name ? this.name.replace(/\s+/g, "").toUpperCase() : "USER";
    const uniquePart = Date.now().toString().slice(-3); // last 3 digits of timestamp
    this.referralCode = `${safeName}${randomNum}${uniquePart}`; // e.g., MANOGNA2578342
  }
  next();
});

module.exports = mongoose.model("User", userSchema);

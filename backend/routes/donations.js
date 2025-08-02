const express = require("express");
const User = require("../models/User");
const Donation = require("../models/Donation");
const router = express.Router();

const currencyRates = { INR: 1, USD: 83, EUR: 91, GBP: 105, JPY: 0.56 };
const currencySymbols = { INR: "₹", USD: "$", EUR: "€", GBP: "£", JPY: "¥" };

/**
 * ✅ Make Donation
 */
router.post("/:referralCode", async (req, res) => {
  try {
    const { donorName, amount, currency } = req.body;
    const { referralCode } = req.params;

    const user = await User.findOne({ referralCode });
    if (!user) return res.status(404).json({ message: "Invalid referral" });

    const rate = currencyRates[currency] || 1;
    user.totalRaised += Number(amount) * rate;
    user.donations.push({ name: donorName, amount: Number(amount), currency, date: new Date() });
    await user.save();

    await new Donation({ user: user._id, donorName, amount, currency, referralCode }).save();
    res.json({ message: "Donation successful" });
  } catch (err) {
    console.error("❌ Donation Error:", err);
    res.status(500).json({ message: "Donation failed" });
  }
});

/**
 * ✅ Leaderboard – INR ranking + Original Currency Breakdown
 */
router.get("/leaderboard", async (req, res) => {
  try {
    const donations = await Donation.find();
    if (!donations.length) return res.json([]);

    const totals = {}, originals = {};

    donations.forEach(d => {
      if (!d.user) return; // ✅ Skip invalid entries
      const curr = d.currency || "INR";
      const rate = currencyRates[curr] || 1;
      const inINR = d.amount * rate;

      totals[d.user] = (totals[d.user] || 0) + inINR;

      if (!originals[d.user]) originals[d.user] = [];
      originals[d.user].push(`${currencySymbols[curr]}${d.amount}`);
    });

    const sorted = Object.entries(totals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const leaderboard = await Promise.all(sorted.map(async ([userId, total]) => {
      let user = null;
      try { user = await User.findById(userId); } catch {}

      return {
        userName: user?.name || "Unknown User",
        referralCode: user?.referralCode || "N/A",
        totalRaised: `₹${Math.round(total)} (${originals[userId].join(" + ")})`
      };
    }));

    res.json(leaderboard);
  } catch (err) {
    console.error("❌ Leaderboard Error:", err);
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
});

/**
 * ✅ User Donations – for Dashboard
 */
router.get("/user/:referralCode", async (req, res) => {
  try {
    const user = await User.findOne({ referralCode: req.params.referralCode });
    if (!user) return res.status(404).json({ donations: [], totalRaised: 0 });

    const donations = user.donations.map(d => ({
      ...d.toObject(),
      currencySymbol: currencySymbols[d.currency] || "₹"
    }));

    // ✅ Build originalAmounts (e.g. "$100 + €50")
    const originalAmounts = user.donations
      .map(d => `${currencySymbols[d.currency] || "₹"}${d.amount}`)
      .join(" + ");

    res.json({ donations, totalRaised: user.totalRaised || 0, originalAmounts });
  } catch (err) {
    console.error("❌ Error Fetching User Donations:", err);
    res.status(500).json({ donations: [], totalRaised: 0, originalAmounts: "" });
  }
});

/**
 * ✅ Transaction History
 */
router.get("/transactions/:referralCode", async (req, res) => {
  try {
    const user = await User.findOne({ referralCode: req.params.referralCode });
    if (!user) return res.status(404).json({ message: "User not found" });

    const transactions = user.donations
      .map(d => ({ ...d.toObject(), currencySymbol: currencySymbols[d.currency] || "₹" }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(transactions);
  } catch (err) {
    console.error("❌ Transaction History Error:", err);
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

module.exports = router;

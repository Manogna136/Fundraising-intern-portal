import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DonatePage() {
  const { referralCode } = useParams();
  const navigate = useNavigate();

  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR"); // ✅ Default currency

  const handleDonate = async () => {
    if (!donorName || !amount) {
      alert("Please enter name and amount");
      return;
    }

    const confirmDonation = window.confirm(
      `Are you sure you want to donate ${currency} ${amount}?`
    );
    if (!confirmDonation) return;

    try {
      await axios.post(`http://localhost:5000/api/donations/${referralCode}`, {
        donorName,
        amount,
        currency, // ✅ Send selected currency
      });
      alert("✅ Donation successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Donation failed. Try again.");
    }
  };

  return (
    <div className="donate-page">
      <h2>💖 Support with a Donation</h2>
      <p>Referral Code: <b>{referralCode}</b></p>

      <input
        type="text"
        placeholder="Your Name"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
      />

      <div className="amount-container">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* ✅ Currency Dropdown */}
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="INR">₹ INR</option>
          <option value="USD">$ USD</option>
          <option value="EUR">€ EUR</option>
          <option value="GBP">£ GBP</option>
          <option value="AUD">$ AUD</option>
        </select>
      </div>

      <button onClick={handleDonate}>Donate</button>
    </div>
  );
}

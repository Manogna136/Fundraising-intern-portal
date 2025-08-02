import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const referralCode = localStorage.getItem("referralCode");
  const [donations, setDonations] = useState([]);
  const [total, setTotal] = useState(0);
  const [originalAmounts, setOriginalAmounts] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!referralCode) return;

    axios.get(`http://localhost:5000/api/donations/user/${referralCode}`)
      .then(res => {
        setDonations(res.data.donations || []);
        setTotal(res.data.totalRaised || 0);
        setOriginalAmounts(res.data.originalAmounts || "");
      })
      .catch(() => alert("⚠️ Failed to load dashboard"))
      .finally(() => setLoading(false));
  }, [referralCode]);

  const handleLogout = () => {
    localStorage.removeItem("referralCode");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <h2>🎉 Welcome Intern!</h2>
      <p>Your Referral Code: <b>{referralCode}</b></p>
      <p>Total Raised: <b>₹{total} {originalAmounts && `(${originalAmounts})`}</b></p>

      <div style={{ marginTop: "10px" }}>
        <a href={`/donate/${referralCode}`}><button>❤️ Make a Donation</button></a>
        <a href="/leaderboard" style={{ marginLeft: "10px" }}><button>🏆 View Leaderboard</button></a>
        <button onClick={handleLogout} style={{ marginLeft: "10px", backgroundColor: "red" }}>🚪 Logout</button>
      </div>

      <h3 style={{ marginTop: "20px" }}>📜 Transaction History</h3>
      {loading ? <p>Loading transactions...</p> : (
        donations.length > 0 ? (
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Donor Name</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d, i) => (
                <tr key={i}>
                  <td>{d.name || "Anonymous"}</td>
                  <td>{d.currencySymbol}{d.amount}</td>
                  <td>{new Date(d.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No donations yet.</p>
        )
      )}
    </div>
  );
}

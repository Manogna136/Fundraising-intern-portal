import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donations/leaderboard")
      .then(res => setLeaders(res.data || []))
      .catch(() => alert("⚠️ Failed to load leaderboard"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏆 Leaderboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : leaders.length > 0 ? (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Referral Code</th>
              <th>Total Raised</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{u.userName}</td>
                <td>{u.referralCode}</td>
                <td>{u.totalRaised}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No donations yet.</p>
      )}
    </div>
  );
}

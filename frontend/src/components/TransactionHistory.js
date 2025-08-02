import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TransactionHistory({ referralCode }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/donations/transactions/${referralCode}`)
      .then(res => setTransactions(res.data))
      .catch(() => alert("Failed to load transactions"));
  }, [referralCode]);

  return (
    <div>
      <h2>🧾 Donation History</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Donor</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? transactions.map((t, i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>₹{t.amount}</td>
              <td>{new Date(t.date).toLocaleString()}</td>
            </tr>
          )) : (
            <tr><td colSpan="3">No transactions yet</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

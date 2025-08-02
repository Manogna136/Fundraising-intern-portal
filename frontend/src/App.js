import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DonationPage from "./components/DonationPage";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Redirect root to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate/:referralCode" element={<DonationPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

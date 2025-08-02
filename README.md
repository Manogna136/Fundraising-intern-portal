# 🌐 Fundraising Intern Portal  

A Full Stack Intern Dashboard built with **React (Frontend)** and **Node.js + Express + MongoDB (Backend)** for managing donations, viewing leaderboards, and tracking transactions.

---

## 🔥 Tech Stack  
- **Frontend:** React, Axios, CSS  
- **Backend:** Node.js, Express, Mongoose  
- **Database:** MongoDB Atlas  
- **Hosting (Optional):** Netlify (Frontend) + Render (Backend)  

---

## 📸 Screenshots  
<img width="1889" height="1039" alt="Screenshot 2025-08-02 133600" src="https://github.com/user-attachments/assets/3e0b3758-d113-4a6d-b9c5-e5b0e8afd639" />
<img width="1902" height="1027" alt="Screenshot 2025-08-02 133624" src="https://github.com/user-attachments/assets/4ec90c03-f9e7-40bd-8c5a-4526d12f6309" />
<img width="1876" height="1006" alt="Screenshot 2025-08-02 133640" src="https://github.com/user-attachments/assets/51ebdc25-3b5c-4796-8261-f5f7b02fb124" />
<img width="1887" height="1004" alt="Screenshot 2025-08-02 133656" src="https://github.com/user-attachments/assets/9cab117f-8945-46de-8224-f25f3fb8bd20" />
<img width="1902" height="1007" alt="Screenshot 2025-08-02 133745" src="https://github.com/user-attachments/assets/c2e5fc2e-2eb5-42c7-a641-8fe46a3f3f3a" />
<img width="1911" height="1031" alt="Screenshot 2025-08-02 133830" src="https://github.com/user-attachments/assets/aee024e2-c150-4dbb-93d3-314e767f57d3" />

---

## ⚙️ Setup Instructions 

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/Manogna136/Fundraising-intern-portal.git
cd Fundraising-intern-portal

# 2️⃣ Setup Backend
cd backend
npm install
npm start   # Starts backend on port 5000
# 🔹 Update the MongoDB URI in server.js with your MongoDB Atlas connection string.

# 3️⃣ Setup Frontend
cd ../frontend
npm install
npm start   # Starts frontend on port 3000

# 🛠 API Endpoints
# Base URL: http://localhost:5000/api
# ----------------------------------------
# | Endpoint                        | Method | Description              |
# |---------------------------------|--------|--------------------------|
# | /auth/signup                    | POST   | (Optional) Create user   |
# | /donations/user/:referralCode   | GET    | Fetch user donation data |
# | /donations/leaderboard          | GET    | Get top 10 leaderboard   |
# | /donations/:referralCode        | POST   | Make a donation          |

# 🖥️ How to Run Locally
# 1. Install Node.js & MongoDB (or use MongoDB Atlas).
# 2. Run backend and frontend as per the steps above.
# 3. Open http://localhost:3000 in your browser.

# ✅ Developed By
# 👩‍💻 Manogna Gorantla

# ✅ Submission Info
# GitHub Repo Link: https://github.com/Manogna136/Fundraising-intern-portal
# Deadline: 5th August 2025, 11:59 PM

# 📝 Notes for Reviewers
# - This is a working prototype with backend + frontend integration.
# - Supports donation tracking, leaderboard, and transaction history.
# - Ready to be extended into a live hosted platform.

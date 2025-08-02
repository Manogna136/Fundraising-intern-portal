# 🌐 Fundraising Intern Portal

A **Full Stack Intern Dashboard** built with **React (Frontend)** and **Node.js + Express + MongoDB (Backend)** for managing donations, viewing leaderboards, and tracking transactions.

---

## 🔥 Tech Stack
- **Frontend:** React, Axios, CSS  
- **Backend:** Node.js, Express, Mongoose  
- **Database:** MongoDB Atlas  
- **Hosting (Optional):** Netlify (Frontend) + Render (Backend)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Manogna136/Fundraising-intern-portal.git
cd Fundraising-intern-portal
2️⃣ Setup Backend
bash
Copy
Edit
cd backend
npm install
npm start
🔹 Update the MongoDB URI in server.js with your MongoDB Atlas connection string:

js
Copy
Edit
await mongoose.connect("your_mongodb_atlas_connection_string");
3️⃣ Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
🌐 Live Demo (Optional)
If deployed, add your links here:

arduino
Copy
Edit
👉 Frontend: https://your-frontend-link.netlify.app
👉 Backend API: https://your-backend-link.onrender.com
🛠 API Endpoints
Base URL: http://localhost:5000/api

Endpoint	Method	Description
/auth/signup	POST	(Optional) Create user
/donations/user/:referralCode	GET	Fetch user donation data
/donations/leaderboard	GET	Get top 10 leaderboard
/donations/:referralCode	POST	Make a donation

📸 Screenshots
(Add screenshots of your dashboard, leaderboard, and donation page)

🖥️ How to Run Locally
Install Node.js & MongoDB (or use MongoDB Atlas).

Follow setup steps for backend & frontend.

Run both servers (npm start in each folder).

Open http://localhost:3000 in your browser.

✅ Developed By
👩‍💻 Manogna Gorantla

✅ Submission Info
GitHub Repo Link: https://github.com/Manogna136/Fundraising-intern-portal

Deadline: 5th August 2025, 11:59 PM

📝 Notes for Reviewers
This is a working prototype with backend + frontend integration.

Supports donation tracking, leaderboard, and transaction history.

Ready to be extended into a live hosted platform.

✅ Next Steps for You (Manogna)
Add this README.md to your project root.

Run:

bash
Copy
Edit
git add .
git commit -m "Added README and final setup"
git push origin master
Submit the GitHub link in the form.

(Optional) Deploy to Netlify (Frontend) and Render (Backend) to provide a live demo.

✨ Great Work!

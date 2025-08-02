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
<img width="1889" height="1039" alt="Screenshot 2025-08-02 133600" src="https://github.com/user-attachments/assets/adadce3d-7d5b-4570-8046-0e98c54e4db2" />
<img width="1902" height="1027" alt="Screenshot 2025-08-02 133624" src="https://github.com/user-attachments/assets/06a833d9-f48b-4d73-88bf-be02dfe4cfcf" />
<img width="1876" height="1006" alt="Screenshot 2025-08-02 133640" src="https://github.com/user-attachments/assets/d535573c-1851-4df3-bf0b-8942b81369c9" />
<img width="1887" height="1004" alt="Screenshot 2025-08-02 133656" src="https://github.com/user-attachments/assets/0cbc7b08-057a-4491-a5b1-c1b0c0ce1a17" />
<img width="1902" height="1007" alt="Screenshot 2025-08-02 133745" src="https://github.com/user-attachments/assets/c2371c74-90fd-44f4-b0c6-6e32f2f718d2" />
<img width="1911" height="1031" alt="Screenshot 2025-08-02 133830" src="https://github.com/user-attachments/assets/1c043b38-3d51-45dc-b48f-644d613e3611" />

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

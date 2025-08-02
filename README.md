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
<img width="1889" height="1039" alt="Screenshot 2025-08-02 133600" src="https://github.com/user-attachments/assets/67855b8c-8fca-4fde-9dc9-46293f242079" />
<img width="1902" height="1027" alt="Screenshot 2025-08-02 133624" src="https://github.com/user-attachments/assets/66d8f940-dda9-4330-a382-61a1fd7b1c5c" />
<img width="1876" height="1006" alt="Screenshot 2025-08-02 133640" src="https://github.com/user-attachments/assets/1b4c3e42-2591-46ac-bfd6-bce6ecce0df9" />
<img width="1887" height="1004" alt="Screenshot 2025-08-02 133656" src="https://github.com/user-attachments/assets/742452b5-ea19-4b86-9e44-35dbf2b1f0aa" />
<img width="1902" height="1007" alt="Screenshot 2025-08-02 133745" src="https://github.com/user-attachments/assets/317a11c5-1853-4b27-9d43-cdc49b9d5120" />
<img width="1911" height="1031" alt="Screenshot 2025-08-02 133830" src="https://github.com/user-attachments/assets/7913695b-8cae-4acb-ace1-ae5afb5fa468" />

---

## ⚙️ Setup Instructions  

1️⃣ Clone the Repository

        git clone https://github.com/Manogna136/Fundraising-intern-portal.git
        cd Fundraising-intern-portal

2️⃣ Setup Backend

        cd backend
        npm install
        npm start
    🔹 Update the MongoDB URI in server.js with your MongoDB Atlas connection string.

3️⃣ Setup Frontend

        cd ../frontend
        npm install
        npm start


🛠 API Endpoints

Base URL: http://localhost:5000/api

| Endpoint                        | Method | Description              |
| ------------------------------- | ------ | ------------------------ |
| `/auth/signup`                  | POST   | (Optional) Create user   |
| `/donations/user/:referralCode` | GET    | Fetch user donation data |
| `/donations/leaderboard`        | GET    | Get top 10 leaderboard   |
| `/donations/:referralCode`      | POST   | Make a donation          |


🖥️ How to Run Locally   

    1️⃣ Install Node.js & MongoDB (or use MongoDB Atlas)
    2️⃣ Run backend and frontend using the commands above
    3️⃣ Open http://localhost:3000 in your browser


✅ Developed By

    👩‍💻 Manogna Gorantla


✅ Submission Info

    GitHub Repo Link: https://github.com/Manogna136/Fundraising-intern-portal
    Deadline: 5th August 2025, 11:59 PM


📝 Notes for Reviewers

    - This is a working prototype with backend + frontend integration.
    - Supports donation tracking, leaderboard, and transaction history.
    - Ready to be extended into a live hosted platform.

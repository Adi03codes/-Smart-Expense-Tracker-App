# Smart-Expense-Tracker-App

A full-stack Smart Expense Tracker that allows users to record, visualize, and manage their expenses efficiently. Designed for real-world deployment, this application features authentication, category-wise expense breakdowns, dynamic charts, and real-time budget alerts.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🧾 Expense Management | Add, edit, and delete expenses with category, amount, and notes. Monthly budget alerts and sorting. |
| 📊 Data Visualization | Intuitive charts and graphs using Chart.js for trends and category-wise analysis. |
| 🔒 User Authentication | Secure sign-up and login using JWT and bcrypt. |
| 🌐 Dashboard | User dashboard with real-time updates, responsive UI, and insights into spending habits. |
| 🪪 Profile Support | Stores user-specific budgets and personalizes suggestions. |

---

## 🧠 Developer Contributions (What I Did)

| Task | My Contribution |
|------|-----------------|
| Database Design | Created MongoDB schemas for User and Expense, modeling real-world finance tracking scenarios. |
| Authentication | Implemented JWT-based login and registration flow with encrypted password storage using bcrypt. |
| RESTful APIs | Developed secure endpoints to manage user data and expense operations using Express.js. |
| Frontend UI | Designed and built a fully responsive frontend using React.js and Tailwind CSS. |
| Visualization | Integrated Chart.js for rendering pie and bar charts to enhance financial insights. |
| Deployment | Deployed the backend on Render and frontend on Vercel for global availability. |

---

## 🔧 Tech Stack

| Layer       | Technologies                      |
|-------------|-----------------------------------|
| Frontend    | React.js, Tailwind CSS, Chart.js  |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB (Mongoose ORM)            |
| Authentication | JWT, bcrypt                    |

---

## 📁 Folder Structure

```
smart-expense-tracker/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Expense.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── expenses.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── expenseController.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
├── .env.example
├── README.md
```

---

## 🛠️ Setup Instructions

### ✅ Backend Setup
```bash
cd backend
npm install
touch .env
```

Add the following to `.env`:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start backend server:
```bash
npm start
```

### 🌐 Frontend Setup
```bash
cd frontend
npm install
npm start
```

Access at: `http://localhost:3000`

---

## 🧪 Example API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login | Login and receive JWT |
| GET    | /api/expenses | Get user expenses |
| POST   | /api/expenses | Add a new expense |
| PUT    | /api/expenses/:id | Edit an expense |
| DELETE | /api/expenses/:id | Delete an expense |

---

## 📊 Visuals & Charts



```markdown
![Dashboard Overview](screenshots/dashboard.png)
![Expense Form](screenshots/form.png)
![Pie Chart Analysis](screenshots/piechart.png)
```

---

## 📦 Future Enhancements

| Feature | Description |
|---------|-------------|
| 👥 Expense Sharing | Enable users to split expenses with friends. |
| 💱 Multi-Currency Support | Convert and manage expenses in different currencies. |
| 🌓 Dark Mode | Add toggle between light/dark UI. |
| 📤 Export Support | Export expenses to CSV or PDF. |

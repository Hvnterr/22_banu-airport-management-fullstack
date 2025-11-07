# ✈️ Airport Management System (Fullstack Project)

A full-stack web application for managing airport operations — including **flights, passengers, and bookings** — built with **React (frontend)** and **Django REST Framework (backend)**.

---

## 🚀 Features

### 🧭 Dashboard
- Displays total counts for Flights, Passengers, and Bookings.
- Real-time data fetched from the backend API.

### 🛫 Flights
- Add, view, and manage flights (origin, destination, schedule, and status).

### 👨‍✈️ Passengers
- Add and list all registered passengers with contact details.

### 🎟️ Bookings
- Book passengers on flights.
- Manage seat numbers and booking status.

---

## 🧩 Tech Stack

### Frontend:
- React 18
- React Router
- Bootstrap 5
- Axios

### Backend:
- Django 5
- Django REST Framework
- SQLite (default) or PostgreSQL

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/banumariwan/22-banu-airport-management-fullstack.git
cd 22-banu-airport-management-fullstack
2️⃣ Backend Setup (Django)
bash
Copy code
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
Backend runs at:
👉 http://127.0.0.1:8000/

3️⃣ Frontend Setup (React)
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:
👉 http://localhost:3000/



👩‍💻 Author
Banu Mariwan
💼 Software Engineer & Cybersecurity Enthusiast
🔗 GitHub Profile

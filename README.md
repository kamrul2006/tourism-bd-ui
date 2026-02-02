# 🌏 TourismBD – Explore Bangladesh Smarter

TourismBD is a **full‑stack tourism web application** focused on showcasing destinations, transport options, budget planning, and travel tips across Bangladesh. The project combines a modern UI with Firebase Authentication and a MongoDB‑powered backend.

---

## 🚀 Live Features Overview

### 🧭 Core Pages

* **Home Page** – Hero sections, highlights, and navigation to all features
* **Destinations Page**

  * Popular destinations with fixed card design
  * Pagination support
  * Fully responsive layout
* **Transport Page**

  * Hero section with mixed transport visuals
  * Transport cards (Air, Rail, Bus, River, Car, Local)
  * Each card has its own background image
* **Budget Page**

  * Budget travel tips
  * Sample budget breakdown section
  * Category‑based visuals (Accommodation, Meals, Transport, Activities)
* **Tips Page** – Travel tips and inspiration for visitors

---

## 🔐 Authentication System

### Implemented using **Firebase Authentication**

* ✅ Email & Password Login
* ✅ Google OAuth Login
* ✅ Secure Sign‑Up with validation
* ✅ Email verification on signup
* ✅ Auth state persistence

### Auth Pages

* Stylish **Login Page** with:

  * Background image
  * Google login button
  * Error handling
* Modern **Signup Page** with:

  * Password strength validation
  * Google signup option
  * Back to Home button

---

## 🧑‍💻 User Experience

### Navbar

* Fully responsive (desktop + mobile)
* Transparent → blurred background on scroll
* Active route highlighting
* Auth‑aware UI:

  * Shows **Login / Signup** when logged out
  * Shows **user avatar + dropdown (name + logout)** when logged in

### UI / UX Highlights

* TailwindCSS modern design system
* Glassmorphism effects
* Smooth hover animations
* Fully responsive on all screen sizes

---

## 🗂️ Backend Features

### Server

* Node.js + Express
* MongoDB Atlas (cloud database)

### Database

* User data storage
* Role‑based structure ready (admin / user)
* Axios public hook for API calls

---

## 🧰 Tech Stack

### Frontend

* React
* React Router DOM
* Tailwind CSS
* React Icons
* SweetAlert2

### Backend

* Node.js
* Express.js
* MongoDB Atlas

### Authentication

* Firebase Authentication

---

## 📁 Project Structure (Simplified)

```text
TourismBD/
├── client/
│   ├── src/
│   │   ├── Auth/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Hooks/
│   │   └── Router/
│   └── public/
│       └── images/
├── server/
│   ├── routes/
│   ├── controllers/
│   └── index.js
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend (`.env`)

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
```

### Backend (`.env`)

```bash
PORT=5000
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tourismBD
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/tourismbd.git
```

### 2️⃣ Client setup

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Server setup

```bash
cd server
npm install
nodemon index.js
```

---

## 🔮 Upcoming Features (Planned)

* 🔐 Role‑based admin dashboard
* ❤️ Favorite destinations
* ⭐ Reviews & ratings
* 💳 Subscription / premium plans
* 🌐 Multi‑language support

---

## 👨‍💻 Developer

* Kamrul Islam Apurba.

* Mobile: +88 01616-210277

**TourismBD** is developed with ❤️ to promote travel across Bangladesh.

If you’d like help extending this project (admin panel, payments, maps, SEO), feel free to ask!

---

### ⭐ If you like this project, don’t forget to star the repository

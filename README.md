# Login-SignUp-MERN-Authentication-Frontend
A clean and modern React-based UI for secure Login & SignUp 🚀. Built with REST API integration, toast alerts, and smooth navigation ✨. Fast, responsive, and user-friendly interface for seamless authentication 🔥👨‍💻.

## 🔗 Live Frontend Deployment

### 🚀 Frontend URL:

https://login-sign-up-mern-authentication-f.vercel.app/

## ✨ Features

🎨 Beautiful & responsive UI

🧾 Login & Signup forms

🔐 JWT-based authentication (works with backend)

🌟 Toast notifications for success/error

📦 React Router-based navigation

💾 Stores token & user info in localStorage

🚫 Redirects unauthenticated users

📡 Connected to live API backend

## 📁 Project Structure
public/
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
src/
    ├── pages/
        ├── Home.js
        ├── Login.js
        └── Signup.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── RefreshHandler.js
    ├── reportWebVitals.js
    ├── setupTests.js
    └── utils.js
.gitignore
LICENSE
package-lock.json
package.json
README.md

## 🚀 Getting Started
1️⃣ Clone the repository
```
git clone https://github.com/OmPimple26/Login-SignUp-MERN-Authentication-Frontend.git
cd Login-SignUp-MERN-Authentication-Frontend
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Start the development server
```
npm start
```

Your project will run on:

```
http://localhost:3000
```

## 🔗 Pages
Page	Description
/signup	User registration page
/login	Login page with validation
/home	Protected page showing logged-in user + products
/	Redirects to login if not authenticated
📡 API Communication

The frontend communicates with backend routes like:

```
POST /auth/signup
POST /auth/login
GET  /products
```


Authorization token is sent using:

```
Authorization: <JWT_TOKEN>
```

## 🌐 Deployment

This frontend supports hosting on:

Vercel ⚡

Netlify 🌍

GitHub Pages 📘

Just build the project:

```
npm run build
```


And deploy the build folder.

## 🤝 Contributing

Feel free to improve the UI or add more pages like reset password, profile page, etc.

## 🧑‍💻 Author

Om Pimple
Frontend for Login-Signup MERN Authentication System.

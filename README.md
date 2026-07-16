# 🛍️ Trendy Hat

A modern full-stack e-commerce web application built with **Next.js**, **TypeScript**, **Node.js**, **Express.js**, and **MongoDB**. Trendy Hat provides a seamless shopping experience where users can browse products, view detailed information, and securely manage products through an admin dashboard.

---

## 🚀 Live Demo

- **Client:** https://my-first-typescript-project-client.vercel.app
- **Server:** https://my-first-typescript-project-server.vercel.app


## 📸 Screenshots

> Add screenshots of your application here.

| Home Page | Product Details | Dashboard |
|-----------|-----------------|-----------|
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Dashboard](./screenshots/dashboard.png) |

---

# ✨ Features

- 🔐 Secure Authentication with JWT
- 👤 Role-Based Authorization (Admin/User)
- 🛒 Product Management
- ➕ Add Product
- ✏️ Edit Product
- ❌ Delete Product
- 🔍 Product Details Page
- 📦 Responsive Product Grid
- 📱 Fully Responsive Design
- 🎨 Modern UI using HeroUI & Tailwind CSS
- ⚡ Fast Server-side Rendering with Next.js
- 🔄 RESTful API Integration
- 🖼️ Image Support
- 🌐 Environment Variable Configuration
- 🔒 Protected Dashboard Routes
- 📊 Loading & Error States
- 🍞 Toast Notifications

---

# 🛠️ Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- HeroUI
- React Hook Form
- React Hot Toast
- Lucide React

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT Authentication
- CORS
- Dotenv

---

# 📁 Project Structure

```
Trendy-Hat
│
├── client/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/trendy-hat-client.git
git clone https://github.com/yourusername/trendy-hat-server.git
```

---

## Client Setup

```bash
cd client
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_SERVER_URI=http://localhost:5000
```

Run

```bash
npm run dev
```

---

## Server Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Run

```bash
npm run dev
```

---

# 🔑 Environment Variables

### Client

```env
NEXT_PUBLIC_SERVER_URI=
```

### Server

```env
PORT=

MONGODB_URI=

JWT_SECRET=
```

---

# 📡 API Endpoints

## Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Single Product |
| POST | /api/products | Create Product |
| PATCH | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

---

# 👨‍💻 Admin Features

- Add Products
- Edit Products
- Delete Products
- Secure Dashboard
- JWT Protected APIs

---

# 📱 Responsive Design

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🚀 Deployment

### Client

Vercel

### Server

Vercel / Render

### Database

MongoDB Atlas

---

# 📌 Future Improvements

- Payment Gateway Integration
- Wishlist
- Product Search
- Product Filtering
- Pagination
- Order Management
- User Profile
- Review & Rating System
- Inventory Management

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 👤 Author

**Symun Hossain Shifat**

- GitHub: https://github.com/yourusername
- Email: saymonshifat569625@gmail.com

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

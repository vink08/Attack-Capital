# Personal Blog Platform

A full-stack blog platform built with **Node.js/Express** for the backend and **Next.js 14 with TypeScript** for the frontend.

## Project Overview

This project consists of two main parts:

- **Backend**: A RESTful API built with Node.js, Express, and MongoDB  
- **Frontend**: A responsive web application built with Next.js 14 and TypeScript  

## Features

✔ User authentication (signup, login, JWT)  
✔ Create and view blog posts  
✔ Filter posts by author  
✔ Responsive design  
✔ Server-side rendering for better SEO  

## Project Structure

```
Attack-Capital/
├── backend/       # Express API
└── frontend/      # Next.js application
```

---

## Getting Started  

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

---

## Installation and Setup  

### **Backend**

1. Navigate to the backend directory:
   ```bash
   cd blog-platform/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following environment variables:
   ```env
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/blog_platform
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

### **Frontend**

1. Navigate to the frontend directory:
   ```bash
   cd blog-platform/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following environment variable:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## Development Choices  

### **Backend**
- **Express**: Lightweight and flexible Node.js web application framework  
- **MongoDB with Mongoose**: NoSQL database for flexible schema design  
- **JWT Authentication**: Secure, stateless authentication method  
- **bcryptjs**: Secure password hashing  

### **Frontend**
- **Next.js 14**: React framework with built-in SSR, SSG, and routing  
- **TypeScript**: Static typing for improved developer experience and code quality  
- **React Hook Form with Zod**: Form handling and validation  
- **Styled Components**: Component-level styling with CSS-in-JS  
- **Axios**: Promise-based HTTP client  

---

 

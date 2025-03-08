# Blog Platform Frontend

This is the frontend for a simple personal blog platform built with Next.js 14 and TypeScript.

## Features

- User authentication (login/signup)
- View all posts on the homepage
- Dashboard for logged-in users to create posts and view their own posts
- Responsive design

## Prerequisites

- Node.js (v16+)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd Attack-Capital/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up environment variables by creating a `.env.local` file in the root of the frontend directory with the following content:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```
   This should point to your running backend server.

## Running the Application

Development mode:
```bash
npm run dev
# or
yarn dev
```

Build for production:
```bash
npm run build
# or
yarn build
```

Start production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
frontend/
│── app/         # Next.js application routes and pages
│── components/  # Reusable React components
│── context/     # React context for state management
│── lib/         # Utilities and API services
│── styles/      # CSS and style-related files
│── types/       # TypeScript type definitions
│── public/      # Static assets (images, favicon, etc.)
│── package.json # Project dependencies and scripts
│── .env.local   # Environment variables (not committed)
│── .gitignore   # Files ignored by Git
```

## Pages

- `/` - Homepage showing all posts
- `/login` - User login page
- `/signup` - User registration page
- `/dashboard` - Protected page for creating posts and viewing your own posts

## Technologies Used

- **Next.js 14** - Server-side rendering & React framework
- **TypeScript** - Strongly typed JavaScript
- **React Hook Form + Zod** - Form handling & validation
- **Styled Components** - CSS-in-JS styling
- **Axios** - HTTP requests to backend API

---

**💡 Notes:**
- Ensure the backend is running before starting the frontend.
- Modify the `.env.local` file if using a deployed backend.

🚀 **Happy coding!**




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

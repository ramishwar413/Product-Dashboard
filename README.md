#Product-Dashboard Project
A modern e-commerce web application built with React, Vite, and Tailwind CSS.
It features product listings, category filtering, a shopping cart system, and a checkout flow.

🚀 Setup Instructions
npm create vite@latest Product-Dashboard (Project-Name)
cd project
Install dependencies
Make sure you have Node.js
 (>= 16) installed.
 Then run:
npm install
Run development server
npm run dev
The app will start at: http://localhost:5173/

📦 Libraries Use:
#Dependencies
react – UI library
react-dom – React rendering for DOM
lucide-react – Icon library

#Dev Dependencies:
vite – Development & build tool
@vitejs/plugin-react – React plugin for Vite
tailwindcss – Utility-first CSS framework
postcss & autoprefixer – CSS processing tools
eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @eslint/js, globals – Code linting tools
@types/react, @types/react-dom – TypeScript type definitions

🛠 Approach & Architecture:
Frontend Framework: Built with React (functional components + hooks) for component-based UI.
State Management: CartContext provides global cart state using React Context API.

Styling: Tailwind CSS for rapid, responsive, utility-based styling.

Routing & Pages: Organized into pages (Home, Products, ProductDetail, Cart, Checkout, About, Contact).

Reusability: Components like ProductCard, CategoryCard, Header, and Footer ensure modular and maintainable design.

Data Handling: Sample product data stored locally in src/data/products.js.

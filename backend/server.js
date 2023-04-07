// Import necessary modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dummyData = require("./dummyData.json");

// Load environment variables
dotenv.config();

// Create Express app and apply necessary middleware
const app = express();
app.use(express.json());
app.use(cors());

// Connect to PostgreSQL database
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl:
//     process.env.NODE_ENV === "production"
//       ? { rejectUnauthorized: false }
//       : false,
// });

// pool.connect((err, client, release) => {
//   if (err) {
//     console.error("Error connecting to the database:", err.stack);
//   } else {
//     console.log("Connected to the database");
//   }
// });

// User registration route
app.post("/api/register", async (req, res) => {
  // Implement user registration logic here
});

// User login route
app.post("/api/login", async (req, res) => {
  // Implement user authentication and JWT creation here
});

// Password reset route
app.post("/api/reset-password", async (req, res) => {
  // Implement password reset functionality here
});

// Shopping list routes (add more routes as needed)
app.get("/api/shopping-lists", async (req, res) => {
  // Fetch shopping lists from the database
});

app.get("/api/shopping-lists", async (req, res) => {
  // Replace this with authentication logic to get the current user ID
  const currentUserId = 1;

  const userShoppingLists = dummyData.shoppingLists.filter(
    (list) => list.userId === currentUserId
  );
  res.statusCode = 200;
  res.json(userShoppingLists);
});

// Product routes (add more routes as needed)
app.get("/api/products", async (req, res) => {
  // Fetch products from the database
});

app.post("/api/products", async (req, res) => {
  // Create a new product in the database
});

// Category routes (add more routes as needed)
app.get("/api/categories", async (req, res) => {
  // Fetch categories from the database
});

app.post("/api/categories", async (req, res) => {
  // Create a new category in the database
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

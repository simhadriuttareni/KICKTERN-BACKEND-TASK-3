# Product Management Backend API

## Project Overview

This project is a backend system for a **Product Management Platform** built as part of the **Backend Development Internship Task – 3**.

The system allows administrators to manage products while normal users can only view them.
It demonstrates key backend concepts such as authentication, role-based access control (RBAC), pagination, filtering, logging, and clean API architecture.

This project simulates how real-world backend systems manage resources securely and efficiently.

---

# Features

## User Authentication

* User Registration
* User Login
* Password hashing using bcrypt
* JWT based authentication

## Role-Based Access Control (RBAC)

Two roles are implemented:

### Admin

* Create product
* Update product
* Delete product
* View products

### User

* View products only

Access control is enforced using middleware.

---

# Product Management APIs

The system provides APIs to perform product operations.

### Create Product (Admin Only)

Allows an admin to add a new product with:

* Product Name
* Description
* Price
* Category

### Get All Products

Returns a list of products stored in the database.

### Get Product by ID

Fetch a specific product using its unique ID.

### Update Product (Admin Only)

Allows an admin to update product details.

### Delete Product (Admin Only)

Allows an admin to remove a product from the database.

---

# Pagination and Filtering

The product listing API supports advanced query features.

## Pagination

Example:

GET /api/products?page=1&limit=5

This returns products in pages instead of returning the entire dataset.

---

## Filtering

Filter products by category.

Example:

GET /api/products?category=Electronics

---

## Price Range Filtering

Example:

GET /api/products?minPrice=500&maxPrice=2000

---

## Sorting

Products can be sorted by price.

Ascending order:

GET /api/products?sort=asc

Descending order:

GET /api/products?sort=desc

---

# Activity Logging

The system logs important actions including:

* Product Creation
* Product Update
* Product Deletion

Logs are stored in:

logs/activity.log

Example log entry:

Product created: 65f2a23...
Product updated: 65f2a23...
Product deleted: 65f2a23...

This helps track system activity.

---

# Error Handling and Validation

The API handles common errors such as:

* Unauthorized access
* Invalid JWT tokens
* Missing fields
* Invalid input data
* Resource not found

Appropriate HTTP status codes are returned.

Examples:

401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

---

# Tech Stack

Backend Technologies Used:

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt password hashing
Winston Logger
Morgan request logging

Development Tools:

VS Code
Postman
Git
GitHub

---

# Project Structure

product-management-backend

config
│   db.js

controllers
│   authController.js
│   productController.js

middleware
│   authMiddleware.js
│   roleMiddleware.js
│   errorMiddleware.js
│   logger.js

models
│   User.js
│   Product.js
│   Log.js

routes
│   authRoutes.js
│   productRoutes.js

logs
│   activity.log

server.js
package.json
.env
README.md

---

# Installation and Setup

## 1 Clone the Repository

git clone https://github.com/simhadriuttareni/KICKTERN-BACKEND-TASK-3.git

cd KICKTERN-BACKEND-TASK-3

---

## 2 Install Dependencies

npm install

---

## 3 Configure Environment Variables

Create a .env file in the root folder.

Example:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
JWT_SECRET=supersecretkey

---

## 4 Start MongoDB

Make sure MongoDB is running locally.

---

## 5 Run the Server

npm run dev

Server will start at:

http://localhost:5000

---

# API Endpoints

## Authentication

Register User

POST /api/auth/register

Login User

POST /api/auth/login

---

## Product APIs

Get All Products

GET /api/products

Get Product By ID

GET /api/products/:id

Create Product (Admin Only)

POST /api/products

Update Product (Admin Only)

PUT /api/products/:id

Delete Product (Admin Only)

DELETE /api/products/:id

---

# API Testing

All APIs were tested using Postman.

Steps:

1. Register user
2. Login to receive JWT token
3. Use token in Authorization header
4. Test product APIs

Authorization Header Example:

Authorization: Bearer <token>

---

# Evaluation Criteria Covered

This project satisfies all requirements of the internship task.

Role-Based Access Control
Clean API structure
Pagination implementation
Filtering and sorting
Logging implementation
Error handling
Code readability

---

# Author

Simhadri Uttareni

Backend Development Internship Task – 3

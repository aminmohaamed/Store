# React E-Commerce Application

A fully functional and responsive e-commerce web application built using React, Redux Toolkit, and Tailwind CSS.

This project was developed to meet all functional, technical, and UX requirements of the frontend assignment, including the bonus features (Cart and Authentication).

---

## Tech Stack

- React 18
- Redux Toolkit
- React Router
- Tailwind CSS
- Fetch API

---

## Implemented Features

### Product Listing Page

- Fetch products from `/products` endpoint
- Display product image, name, price, and category
- Sorting by price (ascending/descending) and category
- Pagination (10 products per page)
- Loading indicator while fetching data
- API error handling
- Empty state message when no products exist

### Product Details Page

- Display full product details (image, title, description, category, price)
- Back to products navigation
- Add to cart functionality

### Create Product Page (Protected)

- Form with validation (required fields, positive price)
- Categories fetched from `/products/categories`
- POST request to `/products` endpoint
- Success message on creation
- Loading and error handling
- Disabled submit button during submission

---

## Bonus Features

### Cart

- Add products from listing and details pages
- View cart items with quantity and total price
- Update quantities and remove items
- Cart persistence using localStorage

### Authentication

- Login and signup functionality
- Authentication state persistence using localStorage
- Protected routes (Create Product, Cart)
- Display logged-in username in the header with logout option
- Conditional Home Page based on authentication state

---

## State Management

Redux Toolkit is used to manage:

- Products state (data, sorting, pagination, loading, errors)
- Cart state
- Authentication state

---

## UX and UI

- Fully responsive design (mobile and desktop)
- Clean and consistent styling using Tailwind CSS
- Reusable and modular components
- Proper user feedback for loading and error states

---

## Project Structure

src/
components/
features/
products/
cart/
auth/
pages/
App.jsx
main.jsx
index.css

---

## Running the Project

npm install
npm run dev

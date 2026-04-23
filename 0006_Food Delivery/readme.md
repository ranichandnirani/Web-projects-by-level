# Aroma Avenue - Food Delivery Website

Aroma Avenue is a responsive food delivery front-end project built with HTML, CSS, and JavaScript. It includes a modern landing page, product menu section, interactive cart, customer reviews slider, mobile navigation, and a separate sign-in page.

## Live Demo

https://aromaavenue.vercel.app

## Preview

This project is designed as a restaurant and food delivery website UI with:

- A fixed responsive navbar
- Hero section with call-to-action buttons
- Services section
- Dynamic menu cards loaded from JSON
- Add-to-cart functionality with quantity controls
- Cart total and item count updates
- Review slider using Swiper.js
- Newsletter/contact section
- Dedicated sign-in page

## Features

- Responsive layout for desktop and mobile
- Fixed navigation bar with smooth scrolling
- Hamburger menu with icon toggle for smaller screens
- Dynamic product rendering from `products.json`
- Shopping cart sidebar with:
  - add to cart
  - increase/decrease quantity
  - automatic total price update
  - automatic cart count update
  - remove item animation
- Customer review carousel
- Separate sign-in page with custom UI

## Built With

- HTML5
- CSS3
- JavaScript
- [Font Awesome](https://fontawesome.com/) for icons
- [Swiper.js](https://swiperjs.com/) for the reviews slider

## Project Structure

```text
0006_Food Delivery/
|-- index.html
|-- signin.html
|-- style.css
|-- main.js
|-- products.json
|-- readme.md
`-- Images/
```

## How It Works

### Navigation

- Desktop and mobile links scroll to page sections.
- The mobile menu opens with a hamburger icon and closes after clicking a link.

### Menu and Cart

- Product data is fetched from `products.json`.
- JavaScript creates menu cards dynamically inside the page.
- Clicking `Add To Cart` adds an item to the cart sidebar.
- Users can increase or decrease item quantity.
- If quantity becomes zero, the item is removed from the cart.
- Cart total price and item count update automatically.

### Reviews

- The review section uses Swiper.js for sliding testimonials.
- Navigation arrows allow moving between review cards.

### Sign-In Page

- `signin.html` provides a separate modern sign-in interface.
- Includes email and password fields, Google sign-in button, and back-to-home button.

## Getting Started

### 1. Clone or Download

Download this project or clone it into your local machine.

```bash
git clone <your-repository-url>
```

### 2. Open the Project

Open the `0006_Food Delivery` folder in your code editor.

### 3. Run the Project

You can run it by opening `index.html` in your browser.

For best results, use a live server extension in VS Code because the project loads menu data from `products.json`.

## Main Files

- `index.html` - main landing page
- `signin.html` - sign-in page
- `style.css` - full website styling and responsive design
- `main.js` - interactive behavior, cart logic, mobile menu, and slider setup
- `products.json` - product data for menu cards

## Future Improvements

- Add real checkout functionality
- Add authentication logic to the sign-in page
- Save cart data in local storage
- Add filtering by food category
- Connect with a backend/database

## Author

Created by Chandni.

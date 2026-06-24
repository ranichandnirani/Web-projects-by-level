<div align="center">

# 🛍️ Trendova

### A modern, fully responsive e-commerce storefront for fashion, jewellery, footwear, cosmetics and more.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-black?style=for-the-badge&logo=vercel)](https://trendova-shoping.vercel.app/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**🔗 Live Site: [https://trendova-shoping.vercel.app](https://trendova-shoping.vercel.app/)**

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Pages & Sections](#-pages--sections)
- [Product Categories](#-product-categories)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Responsive Design](#-responsive-design)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 📌 About the Project

**Trendova** is a front-end online shopping website designed to give visitors the feel of a real e-commerce store. It brings together a wide range of product categories, including men's and women's fashion, footwear, jewellery, perfume, cosmetics, watches and electronics, in one clean and easy-to-navigate interface.

The project is part of the **Web Projects by Level** series (Project `0007_Shopping`) and focuses on building a complete, production-style landing page with a rich navigation system, product showcases, promotional banners, a deal-of-the-day countdown, a blog section and a newsletter subscription popup.

The goal of this project is to practise building a real-world, multi-section e-commerce UI that looks good and works smoothly on every screen size.

---

## 🌐 Live Demo

👉 **[https://trendova-shoping.vercel.app](https://trendova-shoping.vercel.app/)**

---

## ✨ Features

### 🧭 Navigation & Layout
- **Top announcement bar** with a free-shipping offer and social media links
- **Language selector** (English, Español, Français) and **currency selector** (USD $, EUR €)
- **Multi-level mega menu** with sub-categories and banner images for Electronics, Men's, Women's and more
- **Dedicated mobile menu** with collapsible, accordion-style categories
- **Header icons** for search, user account, wishlist and shopping cart with item counters
- **Mobile bottom navigation bar** for quick access on small screens

### 🛒 Shopping Experience
- **Working product search, cart and wishlist** with live filtering, quantity controls, subtotal calculation and browser-local persistence
- **Sign-in and sign-up pages** linked from the account icon, with client-side form validation (demo UI; no backend authentication)
- **Hero banner slider** with promotional offers (women's fashion sale, modern sunglasses, summer sale)
- **Category showcase** with icons and product counts (Dress & Frock, Winter Wear, Glasses & Lens, Shorts & Jeans, T-Shirts, Jacket, Watch, Hat & Caps)
- **Sidebar category list** with expandable sub-categories and stock counts
- **Best Sellers** list with old and discounted prices
- **Product tabs / grids** for **New Arrivals**, **Trending** and **Top Rated** products
- **New Products** showcase with hover image swap, discount badges (`15%`, `sale`, `new`) and quick-action buttons
- **Deal of the Day** section with sold/available progress bars and a **live countdown timer**

### 🔔 Engagement
- **Newsletter subscription modal** to collect emails for product and discount updates
- **"Someone just bought…" social-proof popup** showing recent purchase notifications
- **Customer testimonials** section
- **Call-to-action banner** for the summer collection (25% discount)

### 📰 Content & Trust
- **Our Services** strip: worldwide delivery, next-day delivery, 24/7-style online support, easy returns and money-back guarantee
- **Blog section** with featured articles on fashion, clothes, shoes and electronics
- **Brand directory** listing categories for Fashion, Footwear, Jewellery and Cosmetics
- **Detailed footer** with popular categories, company links, services, contact details, social media and accepted payment methods

---

## 📄 Pages & Sections

| Section | Description |
|---|---|
| **Header** | Top bar, logo, search, account/wishlist/cart icons, mega menu |
| **Hero Banner** | Sliding promotional banners with "Shop now" buttons |
| **Category Carousel** | Icon-based quick links to popular categories |
| **Sidebar** | Category tree and Best Sellers list |
| **Product Showcase** | New Arrivals, Trending and Top Rated products |
| **Deal of the Day** | Featured offers with stock progress and countdown |
| **New Products Grid** | Products with hover effects, badges and action buttons |
| **Testimonial & CTA** | Customer feedback and a discount banner |
| **Services** | Delivery, support, returns and money-back highlights |
| **Blog** | Latest articles with author and date |
| **Footer** | Brand directory, links, contact info, socials and payment methods |

---

## 🗂️ Product Categories

| Category | Sub-categories |
|---|---|
| 👕 **Clothes** | Shirt, Shorts & Jeans, Jacket, Dress & Frock |
| 👟 **Footwear** | Sports, Formal, Casual, Safety Shoes, Party Wear, Boots |
| 💍 **Jewellery** | Earrings, Couple Rings, Necklace, Bracelets |
| 🌸 **Perfume** | Clothes Perfume, Deodorant, Flower Fragrance, Air Freshener |
| 💄 **Cosmetics** | Shampoo, Sunscreen, Body Wash, Makeup Kit |
| 🕶️ **Glasses** | Sunglasses, Lenses |
| 👜 **Bags** | Shopping Bag, Gym Backpack, Purse, Wallet |
| 💻 **Electronics** | Desktop, Laptop, Camera, Tablet, Headphone, Smart Watch, Smart TV, Keyboard, Mouse, Microphone |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, layout (Flexbox / Grid), animations, responsive design |
| **JavaScript (Vanilla)** | Modals, menus, accordions, countdown timer and other interactions |
| **SVG** | Logo and category icons |
| **Vercel** | Hosting and deployment |

---

## 📁 Project Structure

```
Trendova/
│
├── index.html                  # Main HTML file
│
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   │
│   ├── js/
│   │   └── script.js           # Interactivity and behaviour
│   │
│   └── images/
│       ├── logo/               # Trendova logo (SVG)
│       ├── icons/              # Category icons (SVG)
│       ├── products/           # Product images
│       ├── banner-*.jpg        # Hero banners
│       ├── blog-*.jpg          # Blog thumbnails
│       ├── testimonial-1.jpg
│       ├── newsletter.png
│       └── payment.png
│
└── README.md
```

> 📝 *The folder layout above reflects the asset paths used on the live site (`/assets/images/...`). Adjust file names if your local structure differs.*

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser. No build tools or dependencies are required.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ranichandnirani/Web-projects-by-level.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd Web-projects-by-level/0007_Shopping/Trendova
   ```

3. **Open the project**
   - Double-click `index.html`, **or**
   - Use the **Live Server** extension in VS Code:
     right-click `index.html` → **Open with Live Server**

---

## 📱 Responsive Design

Trendova is designed to look good on every device:

| Device | Layout |
|---|---|
| 🖥️ **Desktop** | Full mega menu, sidebar, multi-column product grids |
| 💻 **Laptop / Tablet** | Condensed grids and adjusted spacing |
| 📱 **Mobile** | Slide-in mobile menu, bottom navigation bar, single-column layouts |

---

## 🎓 What I Learned

- Structuring a large, multi-section e-commerce page with clean, semantic HTML
- Building responsive layouts using **Flexbox** and **CSS Grid**
- Creating a **mega menu** and a mobile accordion menu
- Working with modals, popups and notification toasts using JavaScript
- Building a **countdown timer** and stock progress bars
- Designing reusable product cards with hover effects, badges and action buttons
- Optimising images and deploying a static site on **Vercel**

---

## 🔮 Future Improvements

- [ ] Add a working search with live suggestions
- [ ] Add product filtering and sorting (price, rating, category)
- [ ] Build individual product detail pages
- [ ] Implement full cart and wishlist functionality with `localStorage`
- [ ] Add user login and registration
- [ ] Connect currency and language switchers to real translations and exchange rates
- [ ] Integrate a payment gateway
- [ ] Add a backend and database for products and orders
- [ ] Add dark mode
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Optimise performance (lazy-loading images, WebP format)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👩‍💻 Author

**Chandni Rani**

- 🌐 GitHub: [@ranichandnirani](https://github.com/ranichandnirani)
- 💼 LinkedIn: [Chandni Rani](https://www.linkedin.com/in/chandnirani/)
- 📸 Instagram: [@the_chan_dni](https://www.instagram.com/the_chan_dni/)
- 📧 Email: chandnirani229@gmail.com
- 📍 Mohali, Punjab, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Product and banner images are used for demonstration and learning purposes only
- Icons and design inspiration from the open-source web development community

---

<div align="center">

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ by **Chandni**

</div>

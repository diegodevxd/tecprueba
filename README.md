# Engineering Components & Electronics Storefront

A responsive, high-performance web application built for a retail store specializing in engineering components, hardware electronics, and technical tools. This platform bridges the gap between digital catalog browsing and direct client-to-vendor communication.

## 🚀 Key Features

- **Dynamic Image Carousel:** Highlights active promotions, seasonal offers, and featured engineering hardware on the landing page.
- **Structured Product Catalog:** Comprehensive inventory listing displaying clear imagery, accurate pricing, and brief technical descriptions.
- **Category-Based Filtering:** Seamless client-side navigation allowing users to instantly filter inventory by Kits, Components, or Tools.
- **WhatsApp Integration (Instant Quote Pipeline):** Enables customers to click any specific product to instantly initiate a pre-filled WhatsApp chat for custom quotes and order placement.
- **Embedded Location Map:** Smooth Google Maps integration to facilitate physical store discovery.
- **Fully Responsive UI:** Built with a mobile-first approach, ensuring a flawless layout across mobile devices, tablets, and desktops.

## 🛠️ Tech Stack & Ecosystem

- **Frontend Core:** HTML5, CSS3, JavaScript (ES6+)
- **Styling Framework:** Tailwind CSS (Utility-first CSS framework for highly optimized rendering)
- **Development Tooling:** Node.js environment with automated local dev server configurations.

## 📦 Getting Started

### Option 1: Standalone Mode (Quick View)
1. Clone or download this repository.
2. Open the `index.html` file directly in any modern web browser.

### Option 2: Local Development Environment (Advanced)
1. Ensure you have **Node.js** installed on your system.
2. Open your terminal and navigate to the project's root folder:
   ```bash
   cd local-retail-web-platform
3. Install the development dependencies:
   npm install
4.Boot up the local development server:
   npm run dev
5.Open your browser and navigate to the local URL provided in the terminal (typically http://localhost:5173).
Customization & Architecture

    Inventory Data: The catalog is driven dynamically. To add, remove, or modify products, update the products array dataset inside script.js.

    Styling & Theme: Global utility classes are handled via Tailwind CSS. Custom style overwrites or utility extensions can be managed directly in styles.css.   

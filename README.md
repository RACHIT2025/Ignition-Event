# 🔥 Ignition Events: Front-End Ticketing Prototype

A highly styled, animated event ticketing website prototype built entirely using modern front-end technologies. It simulates the core user experience of a major platform while featuring a unique, high-contrast **dark/neon aesthetic**.

## 🌟 Key Technical Features

This project showcases mastery of modern front-end development, animations, and modular architecture.

* **Core Technology:** Built with **React JS** using **Vite** for incredibly fast development and compilation.
* **Routing:** Implements **React Router DOM** for seamless, single-page application (SPA) navigation. Clicking links results in **instantaneous page swaps** without refreshing the browser.
* **Animations & Effects:** Uses **Framer Motion** for a premium user experience:
    * **Staggered Entrance:** Event cards slide in and fade sequentially on the homepage.
    * **Tactile Feedback:** Buttons feature responsive **lift, glow, and depress** effects upon hover and click.
    * **Aesthetic:** High-contrast **Deep Indigo** theme with a vibrant **Electric Cyan (Neon)** accent color, enhanced by **Glassmorphism** on card elements.
* **Simulated Logic:** Functions are built using React State (`useState`) to simulate key back-end interactions:
    * **Filter Logic:** Users can adjust a price slider to dynamically show/hide events, demonstrating "No Results" and "Filtered Results."
    * **Multi-Page Workflow:** Includes full user flows for **Home, Search, Details, Create Event, Help**, and a **Simulated Checkout**.
* **Currency:** All pricing is localized and displayed in **Indian Rupees (₹)**.

## 📁 Project Structure
src/

├── assets/ # Images (e.g., event-placeholder.png)

├── components/ # Reusable UI pieces (Button, Header, Footer, EventCard)

├── pages/ # Main application views (HomePage, SearchPage, CheckoutPage, etc.)

├── App.jsx # Central routing logic

├── index.css # Global theme and CSS variable definitions

└── main.jsx # Project entry point

The codebase is organized into modular components and pages for clarity and maintainability:

## 💻 How to Run Locally

Follow these steps to get a local copy of the project running on your machine:

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR GITHUB REPOSITORY URL HERE]
    cd event
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Launch the Development Server:**
    ```bash
    npm run dev
    ```
    (The site will open in your browser, typically at `http://localhost:5173`)
# 🎨 Creative Market (Sprint 2) - React Transition

This repository marks the significant transition of the **Creative Market** project from static HTML/CSS to a modern, component-based architecture using **React (Vite)**. 

*Note: The "OLD" prefix refers to a reorganization of the Git repository structure during the initial setup phase.*

---

## 📑 Core Concepts & Evolution

### 1. Component-Based Architecture 🧩
Instead of one giant HTML file, the project is now broken down into reusable **React Components**. This makes the code much easier to maintain, test, and scale.
- **Navbar & Footer**: Global components used across the app.
- **Feature-Specific Components**: Such as `Hero`, `Market`, and `ArtistLove` for specialized UI logic.

### 2. Page & Routing Structure 📂
- **`pages/Home.jsx`**: Acts as a high-level orchestrator, assembling various components to build the landing page view.
- **Declarative UI**: Utilizing JSX to clearly define the structure of the market within JavaScript.

### 3. Asset Management 🖼️
- Organized `assets/` directory for better resource handling, separating icons, logos, and product images.

---

## 📁 Repository Structure (Modern Frontend)

- `/src`:
    - `/assets`: Creative and branding resources.
    - `/components`: Atomic UI elements (prefixed with numbers for logical ordering).
    - `/pages`: Main view compositions.
- `App.jsx`: The root component housing the main application logic.
- `main.jsx`: The entry point where React mounts to the DOM.

---

## 💻 Code Highlight: React Composition

```jsx
// How I organized the Home page using functional components
import Navbar from "../components/00_Navbar";
import Hero from "../components/01_Hero";
// ... other imports

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Market />
      <Footer />
    </main>
  );
};

export default Home;

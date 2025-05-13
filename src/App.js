import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TradingStats from "./components/TradingStats";
import Skills from "./components/Skills";
import Trading from "./components/Trading";
import ElegantContact from "./components/ElegantContact";
import Footer from "./components/Footer";
import TradingBackground from "./components/TradingBackground";
import TradingChart3D from "./components/TradingChart3D";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    // Set dark theme as default
    const currentTheme = theme || "dark";
    localStorage.setItem("theme", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(currentTheme);

    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Add Google Fonts for the updated design
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Roboto+Mono&display=swap';
    document.head.appendChild(link);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {loading ? (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300 relative">
          
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <Element name="home">
            <Hero />
          </Element>

          <Element name="about">
            <About />
          </Element>
          
          <Element name="stats">
            <TradingStats />
          </Element>

          <Element name="trading">
            <Trading />
          </Element>
          
          {/* Chart section removed to improve performance */}

          <Element name="skills">
            <Skills />
          </Element>

          <Element name="contact">
            <ElegantContact />
          </Element>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 sm:py-32">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      {/* Network Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <NetworkBackground />
      </div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient opacity-30"></div>

      {/* Content container - centered with max-width for better readability */}
      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl">
        {/* Left side - Text content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="block text-neutral-800 dark:text-neutral-100">
              Hi, I'm{" "}
            </span>
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Mehdi
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-neutral-700 dark:text-neutral-200">
            <TypeAnimation
              sequence={[
                "Crypto Trader",
                1500,
                "Forex Expert",
                1500,
                "Market Analyst",
                1500,
                "Investment Strategist",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-blue-gradient bg-clip-text text-transparent"
            />
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Turning market insights into profitable strategies with precision and expertise.
            Specializing in cryptocurrency markets, forex trading, and strategic investment planning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gold-gradient text-white font-medium rounded-lg shadow-gold hover:shadow-gold-hover transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            {/* Trading Strategies button removed as requested */}
          </div>

          {/* Social links */}
          <div className="flex justify-center lg:justify-start mt-8 gap-6">
            <a
              href="https://x.com/MehdiMagic1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right side - Profile Image with Floating Coins */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gold-gradient rounded-full opacity-20 blur-md"></div>
            <div className="absolute -inset-1 bg-blue-gradient rounded-full opacity-20 blur-sm"></div>
            
            {/* Profile image with fancy border */}
            <div className="relative rounded-full p-1 bg-gold-gradient shadow-gold overflow-hidden w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
              <img 
                src={`${process.env.PUBLIC_URL}/mehdiportfolio.png`} 
                alt="Mehdi - Professional Trader" 
                className="w-full h-full object-cover rounded-full object-top"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -top-5 -right-5 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg text-primary font-bold text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Crypto Expert
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg text-secondary font-bold text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              Forex Trader
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll Down
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center pt-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Performance", id: "stats" },
  { name: "Trading", id: "trading" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "py-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-gold"
        : "py-4 bg-transparent"}`}
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gold-gradient"></div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer relative group flex items-center"
          >
            <div className="relative">
              <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Mehdi Trading" className="h-10" />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="ml-2 text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400">
              <span>Trading Expert</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary dark:text-primary-light"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation with fancy hover effects */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm uppercase tracking-wider font-semibold leading-6 text-neutral-800 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer relative group"
            >
              {item.name}
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-primary-dark dark:text-primary-light hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 focus:outline-none transition-all duration-300 border border-primary/20 dark:border-primary-light/20"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu with improved styling */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm border-l border-primary/20 dark:border-primary/10 card-luxury">
          <div className="flex items-center justify-between">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl font-serif font-bold bg-gold-gradient bg-clip-text text-transparent">
                Mehdi<span className="text-accent">.</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/20 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Decorative gold line */}
          <div className="mt-4 h-0.5 w-full bg-gold-gradient opacity-50"></div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-200 dark:divide-neutral-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-300 border-l-2 border-transparent hover:border-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex items-center justify-center">
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="rounded-full p-3 text-primary-dark dark:text-primary-light hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 focus:outline-none transition-all duration-300 border border-primary/20 dark:border-primary-light/20"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

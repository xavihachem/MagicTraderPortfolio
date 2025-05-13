import React, { useState } from "react";
import { motion } from "framer-motion";

const projectCategories = ["All", "Web3", "DeFi", "Trading", "Frontend"];

const projectsData = [
  {
    id: 1,
    title: "DeFi Yield Aggregator",
    description:
      "A decentralized finance application that automatically optimizes yield farming strategies across multiple protocols.",
    image:
      "https://via.placeholder.com/600x400/6366f1/ffffff?text=DeFi+Yield+Aggregator",
    category: ["Web3", "DeFi"],
    technologies: ["Solidity", "React", "Ethers.js", "Hardhat"],
    link: "#",
  },
  {
    id: 2,
    title: "Crypto Trading Bot",
    description:
      "An algorithmic trading bot that executes trades based on technical indicators and market sentiment analysis.",
    image:
      "https://via.placeholder.com/600x400/10b981/ffffff?text=Crypto+Trading+Bot",
    category: ["Trading"],
    technologies: ["Python", "TensorFlow", "CCXT", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description:
      "A platform for creating, buying, and selling non-fungible tokens with integrated wallet and transaction history.",
    image:
      "https://via.placeholder.com/600x400/f59e0b/ffffff?text=NFT+Marketplace",
    category: ["Web3", "Frontend"],
    technologies: ["React", "Solidity", "IPFS", "Web3.js"],
    link: "#",
  },
  {
    id: 4,
    title: "Market Analysis Dashboard",
    description:
      "A comprehensive dashboard for real-time market analysis, featuring technical indicators and sentiment metrics.",
    image:
      "https://via.placeholder.com/600x400/ef4444/ffffff?text=Market+Analysis+Dashboard",
    category: ["Trading", "Frontend"],
    technologies: ["React", "D3.js", "WebSockets", "TradingView API"],
    link: "#",
  },
  {
    id: 5,
    title: "Cross-Chain Bridge",
    description:
      "A bridge solution enabling asset transfers between different blockchain networks with minimal fees.",
    image:
      "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Cross-Chain+Bridge",
    category: ["Web3", "DeFi"],
    technologies: ["Solidity", "Rust", "React", "Polkadot"],
    link: "#",
  },
  {
    id: 6,
    title: "Decentralized Exchange",
    description:
      "A fully decentralized exchange with automated market maker functionality and liquidity pools.",
    image:
      "https://via.placeholder.com/600x400/14b8a6/ffffff?text=Decentralized+Exchange",
    category: ["Web3", "DeFi"],
    technologies: ["Solidity", "React", "The Graph", "Web3.js"],
    link: "#",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in Web3 development, DeFi applications, and
            trading solutions.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together? Let's build something amazing!
          </p>

          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

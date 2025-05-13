import React from "react";
import { motion } from "framer-motion";
import AnimatedBarChart from "./AnimatedBarChart";
import AnimatedQuote from "./AnimatedQuote";

const StatCard = ({ title, value, icon, delay }) => {
  return (
    <motion.div
      className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-gold/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">{title}</h3>
      </div>
      <p className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">{value}</p>
    </motion.div>
  );
};

const TradingStats = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Trading Performance</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Consistent results across various market conditions and trading instruments.
            My disciplined approach delivers reliable returns while managing risk effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Win Rate"
            value="78%"
            delay={0.1}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          
          <StatCard
            title="Annual Return"
            value="32.5%"
            delay={0.2}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          
          <StatCard
            title="Max Drawdown"
            value="8.2%"
            delay={0.3}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          
          <StatCard
            title="Years Trading"
            value="7+"
            delay={0.4}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        {/* Performance chart */}
        <motion.div
          className="mt-16 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-gold/10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-80 relative">
            <AnimatedBarChart />
          </div>
          <div className="mt-6 text-center">
            <p className="text-neutral-500 dark:text-neutral-400 italic text-sm">
              * Annual returns based on backtested data and actual trading performance over the last 3 years
            </p>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="mt-16">
          <AnimatedQuote 
            quote="Mehdi's trading approach combines technical precision with fundamental analysis, allowing him to identify opportunities others miss. His risk management strategy has been particularly impressive during volatile market conditions."
            author="Hassan Al-Farsi"
            position="Investment Fund Manager"
          />
        </div>
      </div>
    </section>
  );
};

export default TradingStats;

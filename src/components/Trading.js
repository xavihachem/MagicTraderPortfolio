import React from "react";
import { motion } from "framer-motion";

const tradingStrategies = [
  {
    id: 1,
    title: "Technical Analysis",
    description:
      "Expert in chart patterns, indicators, and price action to identify high-probability trading opportunities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "DeFi Yield Farming",
    description:
      "Maximizing returns through strategic liquidity provision and yield optimization in decentralized finance protocols.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Algorithmic Trading",
    description:
      "Developing and implementing automated trading systems that execute trades based on predefined criteria and market conditions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Risk Management",
    description:
      "Implementing sophisticated risk management techniques to preserve capital and maximize long-term profitability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

const cryptoAssets = [
  { name: "Bitcoin", symbol: "BTC", color: "#f7931a" },
  { name: "Ethereum", symbol: "ETH", color: "#627eea" },
  { name: "Binance Coin", symbol: "BNB", color: "#f3ba2f" },
  { name: "Solana", symbol: "SOL", color: "#00ffbd" },
  { name: "Cardano", symbol: "ADA", color: "#0033ad" },
  { name: "Polkadot", symbol: "DOT", color: "#e6007a" },
];

const Trading = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Trading <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With years of experience in cryptocurrency and forex markets, I've
            developed strategies that consistently generate returns in various
            market conditions.
          </p>
        </motion.div>

        {/* Trading strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tradingStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              className="trading-card rounded-xl p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-primary mb-4">{strategy.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {strategy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Market expertise */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Market Expertise
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cryptoAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${asset.color}20` }}
                >
                  <span className="font-bold" style={{ color: asset.color }}>
                    {asset.symbol}
                  </span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">
                  {asset.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trading performance */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-5xl font-bold mb-2 text-primary">85%</h4>
              <p className="text-gray-300">Win Rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl font-bold mb-2 text-primary">250+</h4>
              <p className="text-gray-300">Trading Days Per Year</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl font-bold mb-2 text-primary">42%</h4>
              <p className="text-gray-300">Average Annual Return</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-6">
              My trading approach combines technical analysis, fundamental
              research, and market sentiment to identify high-probability
              trading opportunities across cryptocurrency and forex markets.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Trading Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trading;

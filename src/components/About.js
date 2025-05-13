import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-luxury">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile image with luxury frame */}
              <div className="image-frame">
                <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-gold">
                  {/* Top decorative element */}
                  <div className="h-3 bg-gold-gradient w-full"></div>
                  
                  {/* Image container */}
                  <div className="relative">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/mehdiportfolio.png`}
                      alt="Mehdi - Professional Trader"
                      className="w-full h-[500px] object-cover object-top"
                      style={{ objectPosition: '50% 30%' }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-gold card-luxury">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-gold-shimmer">
                    7+
                  </span>
                  <span className="block text-neutral-600 dark:text-neutral-300 font-medium">
                    Years Experience
                  </span>
                </div>
              </div>
              
              {/* Trading badge */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-neutral-800 rounded-lg py-2 px-4 shadow-gold card-luxury">
                <div className="text-center">
                  <span className="block text-lg font-bold text-secondary-light dark:text-secondary-light">
                    Expert Trader
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-luxury p-8 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-neutral-800 dark:text-neutral-100">
                About <span className="text-gold-shimmer">Me</span>
              </h2>
              
              {/* Decorative divider */}
              <div className="divider-gold my-6"></div>

              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 font-light leading-relaxed">
                I'm Mehdi, a <span className="font-medium text-primary">professional trader</span> specializing in cryptocurrency
                and forex markets with over 7 years of experience. I combine
                technical analysis with fundamental research to develop profitable
                trading strategies that consistently outperform market averages.
              </p>

              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 font-light leading-relaxed">
                My approach integrates <span className="font-medium text-primary">advanced risk management</span> techniques with
                deep market insights, allowing me to navigate volatile markets with confidence.
                I specialize in identifying high-probability setups and optimizing entry and exit points
                to maximize returns while minimizing exposure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-luxury p-5 rounded-xl">
                  <h3 className="text-xl font-serif font-bold mb-4 text-primary dark:text-primary-light">
                    Trading Expertise
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Cryptocurrency Market Analysis</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Forex & Commodity Trading</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Technical Chart Analysis</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Risk Management Systems</span>
                    </li>
                  </ul>
                </div>

                <div className="card-luxury p-5 rounded-xl">
                  <h3 className="text-xl font-serif font-bold mb-4 text-secondary dark:text-secondary-light">
                    Trading Strategies
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      <span>Swing Trading</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      <span>Trend Following</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      <span>Breakout Trading</span>
                    </li>
                    <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      <span>Algorithmic Systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 card-luxury rounded-lg">
                  <span className="block text-3xl font-bold text-gold-shimmer mb-1">95%</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Success Rate</span>
                </div>
                <div className="text-center p-4 card-luxury rounded-lg">
                  <span className="block text-3xl font-bold text-gold-shimmer mb-1">250+</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Clients</span>
                </div>
                <div className="text-center p-4 card-luxury rounded-lg">
                  <span className="block text-3xl font-bold text-gold-shimmer mb-1">24/7</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Market Analysis</span>
                </div>
              </div>

              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-gold-gradient text-white font-medium rounded-lg shadow-gold hover:shadow-gold-hover transition-all duration-300 btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect With Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

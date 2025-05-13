import React from "react";
import { motion } from "framer-motion";
import GlobeContact from "./GlobeContact";

const Contact = () => {

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-60"></div>
        <div className="absolute top-40 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold-500/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gold-500/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="h-0.5 w-16 bg-gold-gradient mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gold-gradient">Get In Touch</span>
            </h2>
            <div className="h-0.5 w-24 bg-gold-gradient mx-auto mt-6"></div>
          </div>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto font-light">
            Connect with a professional trader and investment strategist. Let's discuss how my expertise 
            can help elevate your trading portfolio and financial goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* 3D Globe */}
          <motion.div
            className="relative h-96 lg:h-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full h-full max-w-md mx-auto relative">
              {/* Glowing backdrop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
              
              {/* Globe container with decorative rings */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-80 h-80 border border-gold-500/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute w-72 h-72 border border-gold-500/15 rounded-full" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-64 h-64 border border-gold-500/10 rounded-full" style={{ animationDelay: '2s' }}></div>
                
                {/* 3D Globe */}
                <div className="w-56 h-56 relative z-10">
                  <GlobeContact />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 border border-neutral-800 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="bg-clip-text text-transparent bg-gold-gradient">Contact Information</span>
                <div className="h-px flex-grow ml-4 bg-neutral-700"></div>
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h4>
                    <a href="mailto:mehdi@example.com" className="text-neutral-400 hover:text-gold-500 transition-colors duration-300">
                      mehdi@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h4>
                    <a href="tel:+15551234567" className="text-neutral-400 hover:text-gold-500 transition-colors duration-300">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Location
                    </h4>
                    <p className="text-neutral-400">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Social media links */}
              <div className="mt-10 pt-8 border-t border-neutral-800">
                <h4 className="text-lg font-semibold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gold-gradient">Connect with me</span>
                </h4>
                <div className="flex space-x-4">
                  {/* X (Twitter) */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5 text-gold-500 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gold-500 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  
                  {/* Telegram */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
                    aria-label="Telegram"
                  >
                    <svg className="w-5 h-5 text-gold-500 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  
                  {/* Discord */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
                    aria-label="Discord"
                  >
                    <svg className="w-5 h-5 text-gold-500 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

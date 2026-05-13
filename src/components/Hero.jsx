import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ content }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#FF8C00] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black uppercase tracking-tight text-glow mb-6 max-w-4xl"
      >
        {content.hero.headline}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
      >
        {content.hero.subhead}
      </motion.p>
      
      <motion.a 
        href="#menu"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#FF8C00] to-[#FFD700] text-black font-bold text-lg px-10 py-4 rounded-full box-glow transition-all inline-block"
      >
        {content.hero.cta}
      </motion.a>
    </section>
  );
};

export default Hero;

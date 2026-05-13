import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data';

const Menu = ({ content, lang }) => {
  const [activeCategory, setActiveCategory] = useState('SHAKE');

  return (
    <section id="menu" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 text-glow">
          {content.menuSection.title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {content.menuSection.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-[#FF8C00] text-black box-glow' 
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {menuData[activeCategory].map((item) => (
              <div key={item.id} className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-[#FF8C00]/50 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-[#FF8C00] transition-colors">{item.name}</h3>
                  <span className="text-[#FFD700] font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </div>
                {item.description && item.description[lang] && (
                  <p className="text-gray-400 text-sm">{item.description[lang]}</p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#FF8C00]/10 to-transparent border border-[#FF8C00]/20 text-center"
      >
        <p className="text-[#FFB347] font-semibold flex items-center justify-center gap-2">
          <span>⚡</span> {content.menuSection.addon}
        </p>
      </motion.div>
    </section>
  );
};

export default Menu;

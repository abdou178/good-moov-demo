import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ lang, setLang, content }) => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <img src="/logo.jpg" alt="Good Moov Studio Logo" className="h-14 w-auto object-contain rounded-md shadow-[0_0_15px_rgba(255,140,0,0.5)]" />
        </motion.div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider">
            <a href="#menu" className="hover:text-[#FF8C00] transition-colors">{content.nav.menu.toUpperCase()}</a>
            <a href="#location" className="hover:text-[#FF8C00] transition-colors">{content.nav.location.toUpperCase()}</a>
          </div>
          
          <button 
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full border border-white/10 hover:border-[#FF8C00]/50 transition-all cursor-pointer"
          >
            <span className={`text-xs font-bold ${lang === 'fr' ? 'text-[#FF8C00]' : 'text-white/50'}`}>FR</span>
            <span className="text-white/20">|</span>
            <span className={`text-xs font-bold ${lang === 'en' ? 'text-[#FF8C00]' : 'text-white/50'}`}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

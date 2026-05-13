import React from 'react';

const Footer = ({ content }) => {
  return (
    <footer id="location" className="bg-[#0a0a0a] border-t border-white/5 py-16 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[200px] bg-[#FF8C00]/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.jpg" alt="Good Moov Studio Logo" className="h-16 w-auto mb-6 rounded-md shadow-lg" />
          <p className="text-gray-400 text-sm max-w-xs">
            {content.hero.subhead}
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 text-gray-300">
            <svg xmlns="http://www.3000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF8C00] flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-lg">{content.footer.address}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <svg xmlns="http://www.3000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF8C00] flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-lg">{content.footer.hours}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">{content.footer.follow}</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-[#FF8C00] hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-[#FF8C00] hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm relative z-10">
        © {new Date().getFullYear()} Good Moov Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

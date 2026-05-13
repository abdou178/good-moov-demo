import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { content } from './data';

function App() {
  const [lang, setLang] = useState('fr');
  const currentContent = content[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FF8C00] selection:text-black">
      <Navbar lang={lang} setLang={setLang} content={currentContent} />
      <Hero content={currentContent} />
      <Menu content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}

export default App;

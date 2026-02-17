

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MallSection from './components/MallSection/MallSection';
import AttractionsSection from './components/AttractionsSection/AttractionsSection';
import CuisineSection from './components/CuisineSection/CuisineSection';
import './App.scss';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import MapSection from './components/MapSection/MapSection';
import Footer from './components/Footer/Footer';
import type { LanguageCode } from './components/LanguageSelector/LanguageSelector';

function App() {
  const [language, setLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <MallSection language={language} />
      <AttractionsSection language={language} />
      <CuisineSection language={language} />
      <ExperienceSection language={language} />
      <MapSection language={language} />
      <Footer language={language} />
    </>
  );
}

export default App

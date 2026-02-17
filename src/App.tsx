

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MallSection from './components/MallSection/MallSection';
import AttractionsSection from './components/AttractionsSection/AttractionsSection';
import CuisineSection from './components/CuisineSection/CuisineSection';
import './App.scss'
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import MapSection from './components/MapSection/MapSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MallSection />
      <AttractionsSection />
      <CuisineSection />

      <ExperienceSection/>
      <MapSection/>
      <Footer/>
    </>
  )
}

export default App

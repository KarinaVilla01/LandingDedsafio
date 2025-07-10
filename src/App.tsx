import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Footer from './components/globals/Footer';
import Section1 from './components/S1Portada';
import Section2 from './components/S2Event';
import BigComponet from './components/globals/ComponentBig';
import AboutEventPage from './components/AboutEvent'
import Participants from './components/Participants'
import Format from './components/Format'

const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <div className="overflow-x-hidden">
      <Section1 />
      <Section2 />
      <BigComponet />
    </div>
    <Footer />
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0); 
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutEvent" element={<AboutEventPage />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/format" element={<Format />} />
    </Routes>
  );
}
export default App;

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Problems from './components/Problems'
import Approach from './components/Approach'
import Programmes from './components/Programmes'
import Impact from './components/Impact'
import Sustainability from './components/Sustainability'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './home.css'

export default function Home({ theme, toggleTheme }) {
  const [visibleSections, setVisibleSections] = useState({})

  // Intersection observer for section scroll-revealing animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        });
      },
      { threshold: 0.08 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    }
  }, []);

  return (
    <div className="home-container">
      {/* Decorative background grid and glowing accent shapes */}
      <div className="background-decor">
        <div className="decor-circle circle-1 animate-spin-slow"></div>
        <div className="decor-circle circle-2 animate-float"></div>
        <div className="decor-circle circle-3"></div>
      </div>

      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isVisible={!!visibleSections['hero']} />
        <WhoWeAre isVisible={!!visibleSections['who-we-are']} />
        <Problems isVisible={!!visibleSections['problems']} />
        <Approach isVisible={!!visibleSections['approach']} />
        <Programmes isVisible={!!visibleSections['programmes']} />
        <Impact isVisible={!!visibleSections['impact']} />
        <Sustainability isVisible={!!visibleSections['sustainability']} />
        <Contact isVisible={!!visibleSections['contact']} />
      </main>

      <Footer />
    </div>
  )
}

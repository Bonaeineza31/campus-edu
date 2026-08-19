import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import TopSlideshow from './components/TopSlideshow'
import Hero from './components/Hero'
import About from './components/About'
import WhoWeAre from './components/WhoWeAre'
import Problems from './components/Problems'
import Approach from './components/Approach'
import Programmes from './components/Programmes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './home.css'

export default function Home({ theme, toggleTheme }) {
  const [visibleSections, setVisibleSections] = useState({})
  const location = useLocation()

  // When arriving via a link like "/#contact" (e.g. from Student Corner),
  // React Router doesn't auto-scroll to the hash like a normal page load would.
  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [location.hash, location.key])

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
        <TopSlideshow />
        <Hero isVisible={!!visibleSections['hero']} />
        <About isVisible={!!visibleSections['about']} />
        <WhoWeAre isVisible={!!visibleSections['who-we-are']} />
        <Problems isVisible={!!visibleSections['problems']} />
        <Approach isVisible={!!visibleSections['approach']} />
        <Programmes isVisible={!!visibleSections['programmes']} />
        <Contact isVisible={!!visibleSections['contact']} />
      </main>

      <Footer />
    </div>
  )
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topSlideshow.css';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';

const slides = [
  {
    image: slide6,
    title: 'Student Corner',
    description: 'Structured spaces for career dialogue, entrepreneurial thinking, and mentorship.',
    buttonText: 'Join the Discussion',
    route: '/student-corner'
  },
  {
    image: slide4,
    title: 'Soft Skills Lab',
    description: 'Practical, transferable skills like communication, collaboration, and critical thinking.',
    buttonText: 'Learn More',
    route: '/soft-skills'
  },
  {
    image: slide5,
    title: 'Mobile Campus',
    description: 'Taking education support directly to schools and communities.',
    buttonText: 'Explore Mobile Campus',
    route: '/mobile-campus'
  },
  {
    image: slide1,
    title: 'Career Tour',
    description: 'Visit your dream companies and see the roles you aspire to up close.',
    buttonText: 'Take a Tour',
    route: '/career-tour'
  },
  {
    image: slide2,
    title: 'TVET Digital Lab',
    description: 'An online practical lab for TVET disciplines, allowing you to build competence anywhere.',
    buttonText: 'Start Practicing',
    route: '/tvet-digital'
  },
  {
    image: slide3,
    title: 'The Campus Store',
    description: 'Improving access to learning materials with deferred-payment models.',
    buttonText: 'Access Tools',
    route: '/campus-store'
  }
];

export default function TopSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="top-slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-bg-img" />
          <div className="slide-overlay">
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link to={slide.route} className="slide-btn">{slide.buttonText}</Link>
            </div>
          </div>
        </div>
      ))}
      <div className="slideshow-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

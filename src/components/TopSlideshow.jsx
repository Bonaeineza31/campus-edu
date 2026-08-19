import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topSlideshow.css';

const slides = [
  {
    image: '/KNGL1303 copy.jpg (1).jpeg',
    title: 'Student Corner',
    description: 'Structured spaces for career dialogue, entrepreneurial thinking, and mentorship.',
    buttonText: 'Join the Discussion',
    route: '/student-corner'
  },
  {
    image: '/KNGL1318 copy.jpg (1).jpeg',
    title: 'Soft Skills Lab',
    description: 'Practical, transferable skills like communication, collaboration, and critical thinking.',
    buttonText: 'Learn More',
    route: '/soft-skills'
  },
  {
    image: '/KNGL1386 copy.jpg.jpeg',
    title: 'Mobile Campus',
    description: 'Taking education support directly to schools and communities.',
    buttonText: 'Explore Mobile Campus',
    route: '/mobile-campus'
  },
  {
    image: '/KNGL1414 copy.jpg.jpeg',
    title: 'Career Tour',
    description: 'Visit your dream companies and see the roles you aspire to up close.',
    buttonText: 'Take a Tour',
    route: '/career-tour'
  },
  {
    image: '/KNGL1324 copy.jpg.jpeg',
    title: 'TVET Digital Lab',
    description: 'An online practical lab for TVET disciplines, allowing you to build competence anywhere.',
    buttonText: 'Start Practicing',
    route: '/tvet-digital'
  },
  {
    image: '/KNGL1330 copy.jpg.jpeg',
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

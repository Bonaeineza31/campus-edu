import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import StudentCorner from './pages/student-corner/StudentCorner'
import SoftSkills from './pages/soft-skills/SoftSkills'
import MobileCampus from './pages/mobile-campus/MobileCampus'
import CareerTour from './pages/career-tour/CareerTour'
import TvetDigital from './pages/tvet-digital/TvetDigital'
import CampusStore from './pages/campus-store/CampusStore'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/mobile-campus" element={<MobileCampus />} />
          <Route path="/career-tour" element={<CareerTour />} />
          <Route path="/tvet-digital" element={<TvetDigital />} />
          <Route path="/campus-store" element={<CampusStore />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

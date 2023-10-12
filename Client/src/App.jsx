import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing.jsx'
import Jobs from './views/Jobs/Jobs.jsx'
import Services from './views/Services/Services.jsx'
import Contact from './views/Contact/Contact.jsx'
import './App.module.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

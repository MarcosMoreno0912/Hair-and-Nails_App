import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing.jsx'
import Jobs from './views/Jobs/Jobs.jsx'
import Services from './views/Services/Services.jsx'
import Contact from './views/Contact/Contact.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.module.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const location = useLocation()

  const navRoutes = ['/', '/services', '/jobs', '/contact']
  const footerRoutes = ['/','/services','/jobs', '/contact']

  return (
    <>
      {navRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {footerRoutes.includes(location.pathname) && <Footer />}
      <ToastContainer />
    </>
  )
}

export default App

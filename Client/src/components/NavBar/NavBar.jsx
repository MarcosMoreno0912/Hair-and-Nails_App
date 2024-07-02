import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.ellipse} onClick={() => handleNavigation('/')}></div>
        <span>MCM</span>
      </div>

      <button className={styles.menuIcon} onClick={toggleMobileMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      {/* Contenedor del menú móvil */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <button onClick={() => handleNavigation('/')}>Inicio</button>
          <button onClick={() => handleNavigation('/services')}>Servicios</button>
          <button onClick={() => handleNavigation('/jobs')}>Trabajos</button>
          <button onClick={() => handleNavigation('/contact')}>Contáctanos</button>
        </nav>
      )}

      <div className={styles.containerButtons}>
        <div className={styles.navButton}>
          <button onClick={() => handleNavigation('/')} >Inicio</button>
        </div>
        <div className={styles.navButton}>
          <button onClick={() => handleNavigation('/services')} >Servicios</button>
        </div>
        <div className={styles.navButton}>
          <button onClick={() => handleNavigation('/jobs')} >Trabajos</button>
        </div>
        <div className={styles.navButton}>
          <button onClick={() => handleNavigation('/contact')} >Contáctanos</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

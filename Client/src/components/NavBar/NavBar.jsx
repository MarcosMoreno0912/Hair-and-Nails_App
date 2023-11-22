import React from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.ellipse} onClick={() => handleNavigation('/')}></div>
        <span>Glamour Estética</span>
      </div>
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

import { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import menuIcon from "../../assets/hamburguermenu.png";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <img src={menuIcon} alt="Menú" className={styles.icon} />
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <a href="#home">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

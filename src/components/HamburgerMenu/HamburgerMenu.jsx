import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import menuIcon from "../../assets/hamburguermenu.png"; 
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? (
          <X className={styles.icon} />
        ) : (
          <img src={menuIcon} alt="Menú" className={styles.icon} />
        )}
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/allevents" onClick={closeMenu}>Todos los Eventos</Link>
        <Link to="/createevent" onClick={closeMenu}>Crear Evento</Link>
        <Link to="/profile" onClick={closeMenu}>Perfil</Link>
        <Link to="/login" onClick={closeMenu}>Iniciar Sesión</Link>
        <Link to="/myevents" onClick={closeMenu}>Mis Eventos</Link>
        <Link to="/mytickets" onClick={closeMenu}>Mis Entradas</Link>
        <Link to="/subscribeevent" onClick={closeMenu}>Suscribirse a Evento</Link>
        <Link to="/updateevent" onClick={closeMenu}>Actualizar Evento</Link>
        <Link to="/contact" onClick={closeMenu}>Contáctanos</Link>
        <Link to="/about" onClick={closeMenu}>Acerca de</Link>
      </div>
    </div>
  );
}

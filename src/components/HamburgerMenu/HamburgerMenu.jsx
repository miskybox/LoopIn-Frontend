import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ Importa el contexto
import { X } from "lucide-react";
import menuIcon from "../../assets/hamburguermenu.png"; 
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // ✅ Usa la función y estado del contexto

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout(); // ✅ Usa la función del contexto
    setIsConfirmingLogout(false);
    navigate("/login");
  };

  const confirmLogout = () => {
    setIsConfirmingLogout(true);
    closeMenu();
  };

  const cancelLogout = () => {
    setIsConfirmingLogout(false);
  };

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

        {isAuthenticated && (
          <>
            <Link to="/createevent" onClick={closeMenu}>Crear Evento</Link>
            <Link to="/profile" onClick={closeMenu}>Perfil</Link>
            <Link to="/myevents" onClick={closeMenu}>Mis Eventos</Link>
            <Link to="/mytickets" onClick={closeMenu}>Mis Entradas</Link>
            <Link to="/subscribeevent" onClick={closeMenu}>Suscribirse a Evento</Link>
            <Link to="/updateevent" onClick={closeMenu}>Actualizar Evento</Link>
            <Link to="/aboutandcontact" onClick={closeMenu}>Acerca-de-nosotros</Link>
            <button onClick={confirmLogout} className={styles.logoutButton}>Cerrar Sesión</button>
          </>
        )}

        {!isAuthenticated && (
          <Link to="/login" onClick={closeMenu}>Iniciar Sesión</Link>
        )}
      </div>

      {isConfirmingLogout && (
        <div className={styles.confirmationModal}>
          <p>¿Estás seguro de que quieres cerrar sesión?</p>
          <div className={styles.modalActions}>
            <button onClick={handleLogout} className={styles.confirmButton}>Sí</button>
            <button onClick={cancelLogout} className={styles.cancelButton}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

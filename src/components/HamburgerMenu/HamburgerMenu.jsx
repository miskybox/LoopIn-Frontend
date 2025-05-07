import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import menuIcon from "../../assets/hamburguermenu.png"; 
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false); // Estado para la confirmación de logout
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsConfirmingLogout(false); // Cerrar el modal de confirmación
    navigate("/login"); // Redirigir a la página de login
  };

  // Función para mostrar el mensaje de confirmación
  const confirmLogout = () => {
    setIsConfirmingLogout(true);
    closeMenu();
  };

  // Función para cancelar la confirmación
  const cancelLogout = () => {
    setIsConfirmingLogout(false); // Cerrar el modal si el usuario cancela
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
        <Link to="/createevent" onClick={closeMenu}>Crear Evento</Link>
        <Link to="/profile" onClick={closeMenu}>Perfil</Link>
        <Link to="/login" onClick={closeMenu}>Iniciar Sesión</Link>
        <Link to="/myevents" onClick={closeMenu}>Mis Eventos</Link>
        <Link to="/mytickets" onClick={closeMenu}>Mis Entradas</Link>
        <Link to="/subscribeevent" onClick={closeMenu}>Suscribirse a Evento</Link>
        <Link to="/updateevent" onClick={closeMenu}>Actualizar Evento</Link>
        <Link to="/aboutandcontact" onClick={closeMenu}>Acerca-de-nosotros</Link>

        {/* Botón de Cerrar Sesión */}
        <button onClick={confirmLogout} className={styles.logoutButton}>Cerrar Sesión</button>
      </div>

      {/* Confirmación de Cerrar Sesión */}
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

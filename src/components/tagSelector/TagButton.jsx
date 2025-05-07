import React from 'react';
import styles from './EventTagButton.module.css';

function EventTagButton({ icon, label, active, onToggle }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.active : styles.inactive}`}
      onClick={onToggle}
      title={label}
    >
      <img src={icon} alt={label} className={styles.icon} />
    </button>
  );
}

export default EventTagButton;

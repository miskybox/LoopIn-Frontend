import React, { useState, useEffect } from "react";
import styles from "./ContainerEventDetails.module.css";
import { FaCalendarAlt, FaGlobe, FaHeart, FaRegHeart } from "react-icons/fa";

const ContainerEventDetails = ({
  id,
  name,
  location = "Online",
  date = "15 de Junio, 2025• 09:00 - 18:00",
  price = 30,
  organizer = "TechInnovators"
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`fav-${id}`);
    setIsFavorite(stored === "true");
  }, [id]);

  const toggleFavorite = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    localStorage.setItem(`fav-${id}`, newState);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>Hackathon: {name}</h3>
          <button
            className={styles.favoriteButton}
            onClick={toggleFavorite}
            aria-label="Marcar como favorito"
          >
            {isFavorite ? <FaHeart color="#e91e63" /> : <FaRegHeart />}
          </button>
        </div>
        <p className={styles.organizer}>Por {organizer}</p>
        <div className={styles.detail}><FaGlobe className={styles.icon} />{location}</div>
        <div className={styles.detail}><FaCalendarAlt className={styles.icon} />{date}</div>
      </div>
    </div>
  );
};

export default ContainerEventDetails;


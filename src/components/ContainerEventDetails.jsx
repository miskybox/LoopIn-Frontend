import React from "react";
import styles from "./ContainerEventDetails.module.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaGlobe } from "react-icons/fa";

const ContainerEventDetails = ({ id, name, location = "Online", date = "15 de Junio, 2025• 09:00 - 18:00", price = 30, organizer = "TechInnovators" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>

      <div className={styles.info}>
        <h3 className={styles.title}>Hackathon: {name}</h3>
        <p className={styles.organizer}>Por {organizer}</p>
        <div className={styles.detail}><FaGlobe className={styles.icon} />{location}</div>
        <div className={styles.detail}><FaCalendarAlt className={styles.icon} />{date}</div>


      </div>
    </div>
  );
};

export default ContainerEventDetails;


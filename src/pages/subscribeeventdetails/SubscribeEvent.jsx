import React, { useEffect, useState } from 'react';
import styles from './SubscribeEvent.module.css';
import prideIcon from '../../assets/Icons/pride.png';
import babyIcon from '../../assets/Icons/baby.png';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

function SubscribeEvent() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventData = {
      title: 'Hackathon: Inteligencia Artificial',
      organizer: 'Techinnovators',
      date: '2025-06-15',
      time: '09:00 - 18:00',
      format: 'Online',
      capacity: 30,
      available: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: 'https://source.unsplash.com/800x400/?children,technology',
      tags: ['baby', 'lgbt']
    };

    setEvent(eventData);
  }, []);
  const { id } = useParams();

  const handleSubscribe = async () => {
    try {
     const response = await api.post(`/events/${id}/subscribe`, {
        userId: 123 
      });
      alert('¡Inscripción exitosa!');
      } catch (error) {
        alert('Error al inscribirse 😢');
        console.error(error);
      }
  };

  if (!event) return <p>Cargando...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Suscribete al evento</h2>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src={event.imageUrl} alt={event.title} />
        </div>

        <div className={styles.infoBox}>
          <h3>{event.title}</h3>
          <p>Por {event.organizer}</p>
          <p><strong>{event.format}</strong></p>
          <p>
            {new Date(event.date).toLocaleDateString('es-ES')} · {event.time}
          </p>
          <div className={styles.tags}>
            {event.tags.includes('baby') && <img src={babyIcon} alt="Bebés" />}
            {event.tags.includes('lgbt') && <img src={prideIcon} alt="LGBT" />}
          </div>
        </div>

        <section className={styles.description}>
          <h4>Descripción</h4>
          <div className={styles.capacity}>
            <span><strong>Aforo:</strong> {event.capacity}</span>
            <span><strong>Disponibles:</strong> {event.available}</span>
          </div>
          <p>{event.description}</p>
        </section>

        <div className={styles.buttons}>
          <button className={styles.contact}>Contactar</button>
          <button className={styles.subscribe}>Inscribirte</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeEvent;




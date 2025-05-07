import styles from './MyEvents.module.css';
import React, { useEffect, useState } from 'react';


function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    const mockEvents = [
      {
        id: 1,
        title: 'Hackathon: Inteligencia Artificial',
        organizer: 'Techinnovators',
        date: '2025-06-15',
        time: '09:00 - 18:00',
        format: 'Online',
        imageUrl: '', 
        tags: ['lgbt']
      },
     
    ];

    setEvents(mockEvents);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Mis Eventos</h2>
      <div className={styles.eventList}>
        {events.map(event => (
          <div key={event.id} className={styles.card}>
            <div className={styles.image}>
              {event.imageUrl ? (
                <img src={event.imageUrl} alt={event.title} />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>
            <div className={styles.details}>
              <h3>{event.title}</h3>
              <p>Por {event.organizer}</p>
              <p><strong>{event.format}</strong></p>
              <p>{new Date(event.date).toLocaleDateString('es-ES')} · {event.time}</p>
              <div className={styles.tags}>
                {event.tags.includes('lgbt') && (
                  <img src="/src/assets/icons/pride.png" alt="LGBT friendly" />
                )}
                {/* Aquí puedes ir sumando más condiciones si hay más tags */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEvents;


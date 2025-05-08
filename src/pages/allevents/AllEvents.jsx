import styles from './AllEvents.module.css';
import React, { useEffect, useState } from 'react';
import ContainerEventDetails from "../../components/containereventdetails/ContainerEventDetails.jsx";
import api from '../../services/api';

function AllEvents() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await api.get('/events');
      setEvents(response.data); 
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  };

  fetchEvents();
}, []);

return (
  <>
    <h1 className={styles.title}>Próximos Eventos</h1>
    <ContainerEventDetails />
  </>
);
}

export default AllEvents;



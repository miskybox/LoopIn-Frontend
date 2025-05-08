import styles from './CreateEvent.module.css';
import FormCreateEvent from '../../components/FormCreateEvent/FormCreateEvent';
import api from '../../services/api';


function CreatedEvent() {

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/events', formData);
      alert('Evento creado 🎉');
    } catch (error) {
      console.error('Error al crear evento:', error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <FormCreateEvent />
    </div>
  );

  
  
}

export default CreatedEvent;

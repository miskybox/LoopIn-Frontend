import styles from './UpdateEvent.module.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';



function UpdateEvent() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  useEffect(() => {
    
    const fetchEventData = async () => {
      const existingData = {
        title: 'Nombre del Evento',
        description: 'Descripción del evento...',
        date: '2025-05-10',
        location: 'Barcelona'
      };
      setFormData(existingData);
    };

    fetchEventData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí envías los datos actualizados a tu API
    console.log('Datos actualizados:', formData);
  };

  return (
    <div className="update-event-container">
      <h2>Editar Evento</h2>
      <p>Esta es la página de edicion</p>
      {formData.imageUrl && (
          <img
            src={formData.imageUrl}
              alt="Imagen del evento"
              className={styles.eventImage}/>
        )}

      <form onSubmit={handleSubmit}>
        <label>Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>Fecha:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>Ubicación:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
          <div className={styles.buttonGroup}>
              <Button type="submit" variation="primary" text="Guardar Cambios" />
              <Button type="button" variation="danger" text="Eliminar Evento" onClick={handleDelete} />
          </div>
      </form>
    </div>
  );
}




export default UpdateEvent;
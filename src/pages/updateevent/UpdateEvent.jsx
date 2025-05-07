import styles from './UpdateEvent.module.css';
import TagSelector from '../../components/eventtagSelector/TagSelector.jsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import EventTagSelector from '../../components/eventtagSelector/TagSelector';

function UpdateEvent() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    imageUrl: ''
  });

  const [tags, setTags] = useState({
    baby: false,
    mom: false,
    disabled: false,
    autism: false,
    lgbt: false,
    seniors: false,
    pets: false,
    feeding: false
  });

  useEffect(() => {
    const fetchEventData = async () => {
      const existingData = {
        title: 'Nombre del Evento',
        description: 'Descripción del evento...',
        date: '2025-05-10',
        location: 'Barcelona',
        imageUrl: '' // o pon una imagen de prueba si quieres
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
    console.log('Datos actualizados:', formData);
    console.log('Etiquetas:', tags);
  };

  const handleDelete = () => {
    const confirmed = window.confirm('¿Seguro que quieres eliminar este evento?');
    if (confirmed) {
      console.log('Evento eliminado');
      // Aquí iría tu lógica de borrado
    }
  };

  return (
    <div className={styles.container}>
      <h2>Editar Evento</h2>

      {formData.imageUrl && (
        <img
          src={formData.imageUrl}
          alt="Imagen del evento"
          className={styles.eventImage}
        />
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

        {/* 🔽 Aquí va el selector de etiquetas */}
        <EventTagSelector tags={tags} setTags={setTags} />

        <div className={styles.buttonGroup}>
          <Button type="submit" variation="primary" text="Guardar Cambios" />
          <Button type="button" variation="danger" text="Eliminar Evento" onClick={handleDelete} />
        </div>
      </form>
    </div>
  );
}

export default UpdateEvent;

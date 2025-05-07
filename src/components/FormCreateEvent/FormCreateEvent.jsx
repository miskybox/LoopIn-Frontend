import React, { useState } from 'react';
import styles from './FormCreateEvent.module.css';

function FormCreateEvent() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    image: null,
    categories: [],
    description: ''
  });

  const [errors, setErrors] = useState({});

  const forbiddenChars = /[<>\/]/;
  const locationPattern = /^[a-zA-Z0-9ñÑçÇºª,\s]*$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (value.length < 6 || value.length > 25 || forbiddenChars.test(value)) {
          return 'Debe tener entre 6 y 25 caracteres y no incluir <, > ni /.';
        }
        break;
      case 'location':
        if (!locationPattern.test(value)) {
          return 'Solo se permiten letras, números, espacios y los símbolos º ª ñ ç ,';
        }
        break;
      case 'description':
        if (value.length < 35 || value.length > 400 || forbiddenChars.test(value)) {
          return 'Debe tener entre 35 y 400 caracteres y no incluir <, > ni /.';
        }
        break;
      default:
        return '';
    }
    return '';
  };

  const validateImage = (file) => {
    if (file && !['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      return 'Solo se permiten imágenes JPG, JPEG o PNG.';
    }
    return '';
  };

  const validateAll = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      location: validateField('location', formData.location),
      description: validateField('description', formData.description),
      image: validateImage(formData.image)
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(err => !err);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, image: file }));
    setErrors(prev => ({ ...prev, image: validateImage(file) }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(cat => cat !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    const eventData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'categories') {
        eventData.append(key, JSON.stringify(value));
      } else {
        eventData.append(key, value);
      }
    });

    try {
      const res = await fetch('http://localhost:3001/events', {
        method: 'POST',
        body: eventData
      });

      if (res.ok) {
        alert('Evento creado correctamente');
        setFormData({
          name: '',
          date: '',
          time: '',
          location: '',
          image: null,
          categories: [],
          description: ''
        });
        setErrors({});
      } else {
        alert('Error al subir el evento');
      }
    } catch (err) {
      alert('Error en la conexión con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Nombre del evento:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Eventos"
        required
      />
      {errors.name && <p className={styles.error}>{errors.name}</p>}

      <label>Fecha:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label>Hora:</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label>Ubicación:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Madrid, España"
        required
      />
      {errors.location && <p className={styles.error}>{errors.location}</p>}

      <label>Imagen del producto:</label>
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleFileChange}
        required
      />
      {errors.image && <p className={styles.error}>{errors.image}</p>}

      <label>Agrega las categorías que apliquen:</label>
      <div className={styles.categories}>
        <button
          type="button"
          className={formData.categories.includes('Online') ? styles.selected : ''}
          onClick={() => handleCategoryChange('Online')}
        >
          Online
        </button>
        <button
          type="button"
          className={formData.categories.includes('Presencial') ? styles.selected : ''}
          onClick={() => handleCategoryChange('Presencial')}
        >
          Presencial
        </button>
      </div>

      <label>Danos una breve descripción de tu evento:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      {errors.description && <p className={styles.error}>{errors.description}</p>}

      <button type="submit" className={styles.submit}>Subir evento</button>
    </form>
  );
}

export default FormCreateEvent;

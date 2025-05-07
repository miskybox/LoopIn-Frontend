import React, { useState } from 'react';
import styles from './FormCreateEvent.module.css';

const initialState = {
  name: '',
  date: '',
  time: '',
  location: '',
  image: '',
  modality: '',
  description: '',
  tags: []
};

const tagOptions = [
  { label: 'Bebés', value: 'baby', icon: 'src/assets/Icons/baby.png' },
  { label: 'Accesible sillas de ruedas', value: 'disabled', icon: 'src/assets/Icons/disabled.png' },
  { label: 'Autismo-friendly', value: 'autism', icon: 'src/assets/Icons/autism.png' },
  { label: 'Inclusivo LGTBIQ+', value: 'pride', icon: 'src/assets/Icons/pride.png' },
  { label: 'Mayores', value: 'seniors', icon: 'src/assets/Icons/seniors.png' },
  { label: 'Pet friendly', value: 'animals', icon: 'src/assets/Icons/animals.png' },
];

const FormCreateEvent = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!/^[^<>\/]{8,40}$/.test(value)) {
          error = 'El nombre debe tener entre 8 y 40 caracteres y no contener <, > o /.';
        }
        break;
      case 'location':
        if (!/^[^<>]{5,100}$/.test(value)) {
          error = 'La ubicación debe tener entre 5 y 100 caracteres y no contener < o >.';
        }
        break;
      case 'description':
        if (!/^[^<>\/]{25,500}$/.test(value)) {
          error = 'La descripción debe tener entre 25 y 500 caracteres y no contener <, > o /.';
        }
        break;
      case 'image':
        if (value && !/\.(jpg|jpeg|png)$/i.test(value)) {
          error = 'Solo se permiten imágenes .jpg, .jpeg o .png.';
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    const newValue = name === 'image' ? files[0]?.name || '' : value;

    setForm(prev => ({ ...prev, [name]: newValue }));
    validate(name, newValue);
  };

  const handleModality = mode => {
    setForm(prev => ({ ...prev, modality: mode }));
  };

  const toggleTag = tag => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí iría el envío al backend
    if (Object.values(errors).some(err => err)) {
      alert('Por favor corrige los errores antes de enviar.');
      return;
    }
    console.log('Formulario enviado:', form);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Nombre del evento:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className={errors.name ? styles.errorInput : ''}
      />
      {errors.name && <span className={styles.errorText}>{errors.name}</span>}

      <label>Fecha:</label>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <label>Hora:</label>
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
      />

      <label>Ubicación:</label>
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        className={errors.location ? styles.errorInput : ''}
      />
      {errors.location && <span className={styles.errorText}>{errors.location}</span>}

      <label>Imagen del producto:</label>
      <input
        type="file"
        name="image"
        accept=".jpg,.jpeg,.png"
        onChange={handleChange}
        className={errors.image ? styles.errorInput : ''}
      />
      {errors.image && <span className={styles.errorText}>{errors.image}</span>}

      <div className={styles.modalityContainer}>
  <button
    type="button"
    className={`${styles.onlineButton} ${form.modality === 'online' ? styles.selectedOnline : ''}`}
    onClick={() => handleModality('online')}
  >
    Online
  </button>
  <button
    type="button"
    className={`${styles.presencialButton} ${form.modality === 'presencial' ? styles.selectedPresencial : ''}`}
    onClick={() => handleModality('presencial')}
  >
    Presencial
  </button>
</div>

<label>Selecciona etiquetas adicionales:</label>
<div className={styles.tagContainer}>
  {tagOptions.map(tag => (
    <button
      key={tag.value}
      type="button"
      className={`${styles.tagButton} ${form.tags.includes(tag.value) ? styles.selectedTag : ''}`}
      onClick={() => toggleTag(tag.value)}
      aria-pressed={form.tags.includes(tag.value)}
      aria-label={tag.label}
    >
      <img src={tag.icon} alt={tag.label} className={styles.icon} />
    </button>
  ))}
</div>

      <label>Danos una breve descripción de tu evento:</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className={errors.description ? styles.errorInput : ''}
      />
      {errors.description && <span className={styles.errorText}>{errors.description}</span>}

      <button type="submit" className={styles.submitButton}>
        Subir evento
      </button>
    </form>
  );
};

export default FormCreateEvent;

import React, { useState } from 'react';
import styles from "../aboutandcontact/AboutAndContact.module.css";
export default function AboutContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  
  const sanitize = (value) =>
    value.replace(/[<>{}]/g, '').trim();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: sanitize(value) }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Nombre demasiado corto';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Mensaje demasiado breve';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    
    console.log('Formulario enviado con:', formData);

   
    setFormData({ name: '', email: '', message: '' });
    alert('¡Mensaje enviado!');
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", padding: "2rem" }}>
      <section style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
      <h2 className={styles.h2} style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Acerca de Nosotras</h2>
        <p style={{ marginBottom: '1rem' }}>
          Somos una comunidad dedicada a impulsar la tecnología desde un enfoque inclusivo y accesible. Creemos en el poder de la colaboración y la innovación para construir un futuro más justo.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Nuestro compromiso es brindar un espacio seguro donde todas las personas puedan aprender, compartir y crecer juntas en el mundo tech.
        </p>
        <p>
          A través de proyectos, eventos y redes de apoyo, trabajamos cada día por una tecnología más representativa, creativa y humana.
        </p>
      </section>

      <section>
        <h2 className={styles.h2} style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Contáctanos</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          ¿Tienes preguntas, sugerencias o te gustaría colaborar con nosotras? ¡Escríbenos!
        </p>

        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={styles.label} htmlFor="name">
            Nombre
            <input
              className={styles.input}
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="50"
              autoComplete="off"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>

          <label className={styles.label} htmlFor="email">
            Correo electrónico
            <input
              className={styles.input}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>

          <label className={styles.label} htmlFor="message">
            Mensaje
            <textarea
              className={styles.input}
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="1000"
              autoComplete="off"
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </label>

          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}

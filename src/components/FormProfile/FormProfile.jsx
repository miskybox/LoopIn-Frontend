import React, { useState } from "react";
import Modal from "../../components/Modal/Modal.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import styles from "./FormProfile.module.css"; 
import api from '../../services/api';


const PerfilForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    imagen: null,
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/users/me');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error al cargar perfil:', error);
      }
    };
  
    fetchProfile();
  }, []);
  
  const [showModal, setShowModal] = useState(false);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      setFormData({
        ...formData,
        imagen: URL.createObjectURL(file),
      });
      setIsImageSelected(true);
    } else {
      setErrors({
        ...errors,
        imagen: "Solo se permiten archivos JPG, JPEG y PNG.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalConfirm = (action) => {
    if (action === "yes") {

      alert("Datos guardados con éxito");
    }
    setShowModal(false);
  };

  const validateField = (name, value) => {
    let message = "";

    if (name === "nombre") {
      const regex = /^[A-Za-zñçÑÇáéíóúÁÉÍÓÚ\s]+$/;
      if (!regex.test(value)) {
        message = "El nombre solo puede contener letras, ñ, ç y espacios.";
      }
    }

    if (name === "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(value)) {
        message = "Por favor ingresa un correo electrónico válido.";
      }
    }

    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s<>:/])[A-Za-z\d^\w\s]{6,20}$/;
      if (!regex.test(value)) {
        message = "La contraseña debe tener entre 6 y 20 caracteres, incluir al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo que no sea /, <, > o :";
      }
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <div className={styles.modalContent}>
            <p>¿Estás seguro de que quieres guardar los cambios?</p>
            <div className={styles.modalButtons}>
              <button
                className={styles.modalButtonYes}
                onClick={() => handleModalConfirm("yes")}
              >
                Sí
              </button>
              <button
                className={styles.modalButtonNo}
                onClick={() => handleModalConfirm("no")}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.profileImageWrapper}>
          {isImageSelected && formData.imagen && (
            <img
              src={formData.imagen}
              alt="Imagen de perfil"
              className={styles.profileImage}
            />
          )}
        </div>

        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.nombre && <div className={styles.error}>{errors.nombre}</div>}

        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}

        <label className={styles.label}>Contraseña:</label>
        <div className={styles.passwordWrapper}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
          <span
            className={styles.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <div className={styles.error}>{errors.password}</div>}

        
       
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.imageInput}
        />

        <button type="submit" className={styles.button}>
          Guardar
        </button>
      </form>
    </div>
  );
};

export default PerfilForm;




// src/pages/login/LogIn.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import IconContainer from '../../components/iconContainer/IconContainer';
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import logo from "../../assets/Logo.png";

import styles from "./LogIn.module.css";
import Button from "../../components/button/Button";
import { useAuth } from '../../context/AuthContext.jsx';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let message = "";
    if (name === "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!regex.test(value)) {
        message = "Por favor ingresa un correo electrónico válido.";
      }
    }
    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,20}$/;
      if (!regex.test(value)) {
        message = "Contraseña débil: usa 6–20 caracteres, mayúscula, minúscula, número y símbolo.";
      }
    }
    setErrors(prev => ({ ...prev, [name]: message }));
  };
  

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!errors.email && !errors.password && email && password) {
      // Simula llamada a API y recibe token
      const fakeToken = 'mi-token-de-ejemplo';
      login(fakeToken);        // guarda token en localStorage y actualiza estado
      navigate('/allevents');  // redirige a página protegida
    } else {
      alert('Corrige los errores antes de continuar.');
    }
  };

  return (
    <div className={styles.loginPage}>
      <ImageContainer imgPath={logo} className={styles.imglogin} />
      <h1 className={styles.welcome}>¡Bienvenide!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            name="email"
            variation="login"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            showIcon={false}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.passwordWrapper}>
          <Input
            name="password"
            variation="login"
            type={passwordVisible ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            showIcon={false}
          />
          <div className={styles.eyeIconWrapper} onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </div>
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <h3 className={styles.forgot}>¿Olvidaste la contraseña?</h3>
        <Button type="submit" className={styles.buttonlogin}>Login</Button>
        <h3 className={styles.register}>
          ¿No estás registrado? <span className={styles.reglink} onClick={() => navigate('/register')}>Regístrate ahora</span>
        </h3>
      </form>
      <section className={styles.socialLogin}>
        <hr />
        <h3>O continuar con</h3>
        <div className={styles.icons}>
          <IconContainer variation="google" />
          <IconContainer variation="apple" />
          <IconContainer variation="facebook" />
        </div>
      </section>
    </div>
  );
};

export default LogIn;

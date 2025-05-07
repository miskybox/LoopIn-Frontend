import React, { useState } from "react";
import styles from "./LogIn.module.css"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import IconContainer from '../../components/iconContainer/IconContainer';
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import logo from "../../assets/Logo.png"; 

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

  const isPasswordEmpty = password === ""; 

  return (
    <main className={styles.login}>
      <ImageContainer imgPath={logo} className={styles.imglogin} />
      <h1 className={styles.welcome}>¡Bienvenide!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          showIcon={false} 
        />
        {}
        <div className={styles.passwordWrapper}>
          <Input
            type={passwordVisible ? "text" : "password"} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            showIcon={false} 
          />
          
          <div 
            className={styles.eyeIconWrapper} 
            onClick={togglePasswordVisibility} 
            aria-label="Toggle password visibility"
          >
            {}
            {isPasswordEmpty || !passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <Button className={styles.buttonlogin}>Login</Button>
      </form>

      
      <h3 className={styles.forgot}>¿Olvidaste la contraseña?</h3>

      <h3>
        ¿No estás registrado?{" "}
        <span className={styles.reglink}>
          Regístrate ahora
        </span>
      </h3>

      <IconContainer className={styles.iconlogin}/>
    </main>
  );
}

export default LogIn;
 
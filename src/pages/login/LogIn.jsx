import React, { useState } from "react";
import styles from "./LogIn.module.css"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import IconContainer from '../../components/iconContainer/IconContainer';
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import logo from "../../assets/Logo.png"; 
import ProductCard from "../../components/productCard/ProductCard";

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
      <section > <ImageContainer imgPath={logo} className={styles.imglogin} />
        </section>
      <h1 className={styles.welcome}>¡Bienvenide!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}><Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          showIcon={false} 
        />
        {}
        </div>
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

        
      </form>

      
      <h3 className={styles.forgot}>¿Olvidaste la contraseña?</h3>
      <Button className={styles.buttonlogin}>Login</Button>
      <h3>
        ¿No estás registrado?{" "}
        <span className={styles.reglink}>
          Regístrate ahora
        </span>
      </h3>
      
<section className={styles.icons} >
<IconContainer variation="google" />
  <IconContainer variation="apple" />
  <IconContainer variation="facebook" />

</section>
<ProductCard />
    </main>
  );
}

export default LogIn;
 
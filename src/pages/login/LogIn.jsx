import React from "react";
import './LogIn.module.css';
import { useState } from "react";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import IconContainer from '../../components/iconContainer/IconContainer';
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";



function LogIn() {
   return (
     <>
     <main >
     <section className="imgcont">  <ImageContainer imgPath="../../assets/Logo.png" className="imglogin"/>
     </section>
     <section>
     <h1 className='welcome'>
     Bienvenide!
          </h1>
          
          <h3 className='forgot'>
          Olvidaste la contraseña?
          </h3>
     </section>
     <Button className="buttonlogin"/>
     <h3>
     No estas registrado?  <span className="reglink"><a>Registrate ahora</a></span>
     </h3>
  <IconContainer />
 </main>
 
 </>
)


};  


export default LogIn;


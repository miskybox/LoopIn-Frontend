import React from "react";
import './LogIn.module.css';
import { useState } from "react";
import IconContainer from '../../components/iconContainer/IconContainer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCarousel from '../../components/eventCarousel/EventCarousel';
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";


function LogIn() {
    return (
      <>
      <Header />
      <main >
      <EventCarousel />
      <h1 className='welcome'>
      Bienvenide!
   		     </h1>
    <Footer />
  </main>
  </>
)

};   

export default LogIn;
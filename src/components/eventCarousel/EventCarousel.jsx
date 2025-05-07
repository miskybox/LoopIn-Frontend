import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../eventCarousel/EventCarousel.module.css";

import foto1 from "../../assets/images /foto1.jpg";
import foto2 from "../../assets/images /foto2.jpg";
import foto3 from "../../assets/images /foto3.jpg";
import foto4 from "../../assets/images /foto4.jpg";
import foto5 from "../../assets/images /foto5.jpg";

const EventCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [foto1, foto2, foto3, foto4, foto5];

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Foto ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={() => sliderRef.current.slickPrev()}
      >
        {"<"}
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={() => sliderRef.current.slickNext()}
      >
        {">"}
      </button>
    </div>
  );
};

export default EventCarousel;

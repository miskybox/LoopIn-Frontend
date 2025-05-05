import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../eventCarousel/EventCarousel.module.css";

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

  const images = [
    "https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2022/03/mis-fotografias-paisaje-favoritas-07-810x540.jpg",
    "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
    "https://cdn.shortpixel.ai/spai/q_lossless+w_1082+to_auto+ret_img/independent-photo.com/wp-content/uploads/2022/02/Yifeng-Ding-scaled.jpeg",
  ];

  return (
    
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
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

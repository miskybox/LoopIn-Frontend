import { FaSearch } from "react-icons/fa";
import EventCarousel from "../../components/eventCarousel/EventCarousel";
import styles from "./Home.module.css"; 
import Input from "../../components/input/Input";

function Home() {
  return (
    <div className={styles.pageContainer}>
      
      <div className={styles.searchContainer}>
        <Input
          name="busqueda"
          placeholder="Buscar..."
          isSearch
        />
       
      </div>

     
      <EventCarousel />

     
      <section className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Bienvenidos a Code Crafters</h1>
        <p className={styles.homeDescription}>
          <span className={styles.highlight}>✨ Code Crafters</span>, una empresa líder en el sector tecnológico, desea implementar una plataforma web que facilite la organización de eventos tanto online como presencial dentro de la comunidad tecnológica. Con el rápido avance de la tecnología, la colaboración y el intercambio de conocimientos son más importantes que nunca.
        </p>
        <p className={styles.homeDescription}>
          Code Crafters busca crear una plataforma única y poderosa que satisfaga las necesidades específicas de la comunidad tecnológica, promoviendo la colaboración, el aprendizaje continuo y la innovación dentro del sector. Esta aplicación aspira a convertirse en el punto de encuentro virtual para profesionales, entusiastas y expertos en tecnología de todo el mundo.
        </p>
      </section>
    </div>
  );
}

export default Home;
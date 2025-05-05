import EventCarousel from "../../components/eventCarousel/EventCarousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <EventCarousel />
        
      </main>
      <Footer />
    </div>
  );
}

export default Home;

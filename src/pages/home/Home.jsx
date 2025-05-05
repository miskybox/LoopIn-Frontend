import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Home</h1>
        
      </main>
      <Footer />
    </div>
  );
}

export default Home;

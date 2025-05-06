import { FaSearch } from "react-icons/fa";
import EventCarousel from "../../components/eventCarousel/EventCarousel";
import styles from "./Home.module.css";


function Home() {
  return (
    <div >
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "0 2rem"}}>
        <FaSearch style={{marginTop:"25px", width:"60px", marginRight:"-10px"}}/>
        <input variation="search"/>
      </div>
    
      <EventCarousel /> 
      <div className={styles.homeContent}>
      </div>
    </div>
  );
}

export default Home;

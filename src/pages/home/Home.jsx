import { FaSearch } from "react-icons/fa";
import EventCarousel from "../../components/eventCarousel/EventCarousel";
import styles from "./Home.module.css";
import Input from "../../components/input/Input";

function Home() {
  return (
    <div >
      <Input
        name="busqueda"
        placeholder="Buscar..."
        isSearch
      />
    
      <EventCarousel /> 
      <div className={styles.homeContent}>
      </div>
    </div>
  );
}
export default Home;

import styles from './MyEvents.module.css';
import IconContainer from "../../components/iconContainer/IconContainer";
import ProductCard from "../../components/productCard/ProductCard";

function MyEvents() {
  return ( 
    <>
      <h1 className={styles.title}>My Events</h1> 
      <div style={{ display: "flex", gap: "1rem" }}>
        <IconContainer variation="google" />
        <IconContainer variation="facebook" />
        <IconContainer variation="apple" />
        <IconContainer variation="favorites" />
        <IconContainer variation="home" />
        <IconContainer variation="like" />
      </div>
        <ProductCard />
    </>
    
  );
}


export default MyEvents;

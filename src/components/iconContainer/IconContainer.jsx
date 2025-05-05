import { FaHeart, FaHome, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import styles from './IconContainer.module.css';


const icons = {
 home: FaHome,
 favorites: IoHeartCircleOutline,
 google: FaGoogle,
 apple: FaApple,
 facebook: FaFacebook,
 like: FaHeart
};


const IconContainer = ({ variation = "google", size = 48, onClick, className="" }) => {
 const IconComponent = icons[variation] || FaGoogle;


 return (
   <button className={`${styles.iconContainer} ${styles[variation]} ${className}`} onClick={onClick}>
     <IconComponent className={styles.iconImg} size={size} />
   </button>
 );
};


export default IconContainer;

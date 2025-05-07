import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import styles from './IconContainer.module.css';


const icons = {

    google: FaGoogle,
    apple: FaApple,
    facebook: FaFacebook,
 
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

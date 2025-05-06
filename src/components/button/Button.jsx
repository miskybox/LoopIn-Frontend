import styles from './Button.module.css';


const Button = ({ onClick, type = "button", variation = "primary", text }) => {
 return (
   <button
     className={`${styles.button} ${styles[variation]}`}
     type={type}
     onClick={onClick}
   >
     {text}
   </button>
 );
};


export default Button;
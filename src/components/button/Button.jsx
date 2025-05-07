import styles from './Button.module.css';


const handleLogin = () => {
  
  console.log('Login button clicked!');
};

function Button({ children, type = "button", variation = "login", onClick  }) {
  return (
   
    <button
    type={type}
    onClick={onClick}
    className={`${styles.button} ${styles[variation]}`}
  >
    {children}
  </button>

   
  );
}

export default Button;




